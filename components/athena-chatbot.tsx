"use client";

import { useState, useRef, useEffect, type SubmitEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { X, Send } from "lucide-react";

/* ───────────────────────────────────────────
   Palette — pulled from the site's varsity
   theme so the widget matches globals.css
   ─────────────────────────────────────────── */
const NAVY = "#1d3557";
const BURGUNDY = "#7b1113";
const CREAM = "#fff9eb";
const GOLD = "#f4bc6a";

/* ───────────────────────────────────────────
   Types — mirrors the API response shape
   ─────────────────────────────────────────── */
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/* ───────────────────────────────────────────
   Helper — serialise message history as a
   conversation string for the backend
   ─────────────────────────────────────────── */
function buildHistory(messages: ChatMessage[]): string {
  return messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");
}

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */
export default function AthenaChatbot() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      // Small delay for the animation to start
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ask/athena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          history: buildHistory(messages),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: data.answer || "Sorry, I didn't get an answer for that one.",
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <>
      {/* ── Floating trigger button (round) ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Athena chat" : "Open Athena chat"}
        aria-expanded={open}
        className="
          fixed bottom-6 right-6 z-9999
          w-14 h-14 rounded-full overflow-hidden
          flex items-center justify-center
          transition-all duration-200 ease-md
          hover:scale-110 active:scale-95
        "
        style={{
          background: NAVY,
          border: `2px solid ${GOLD}`,
          boxShadow: open
            ? `0 4px 20px ${NAVY}80`
            : `0 8px 30px ${NAVY}59, 0 0 0 4px ${GOLD}26`,
        }}
      >
        {open ? (
          <X className="h-5 w-5" style={{ color: CREAM }} aria-hidden="true" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/athena_logo.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        )}
      </button>

      {/* ── Chat panel ── */}
      <div
        role="dialog"
        aria-label="Chat with Athena"
        aria-hidden={!open}
        className="
          fixed bottom-24 right-6 z-9999
          w-[min(92vw,400px)] h-[min(70vh,600px)]
          flex flex-col
          rounded-[20px] overflow-hidden
          transition-all duration-300 ease-md
          origin-bottom-right
        "
        style={{
          background: CREAM,
          border: `2px solid ${GOLD}`,
          boxShadow: "var(--shadow-md-xl)",
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(0.85)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center gap-3 px-4 py-3 shrink-0"
          style={{ background: NAVY, borderBottom: `2px solid ${GOLD}` }}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/athena_logo.svg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-heading font-semibold text-base tracking-wide"
              style={{ color: CREAM }}
            >
              Athena
            </p>
            <p className="text-xs" style={{ color: GOLD }}>
              Motion-U AI Assistant
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="p-1.5 rounded-lg transition-colors duration-200 hover:bg-white/10"
            style={{ color: CREAM }}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* ── Messages ── */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
          aria-live="polite"
        >
          {messages.length === 0 && !loading && (
            <p
              className="text-sm text-center py-10 px-4 leading-relaxed"
              style={{ color: NAVY, opacity: 0.7 }}
            >
              Ask me anything about the Hack-A-Ton — teams, rules, prizes or the
              schedule.
            </p>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.role === "user"
                    ? {
                        background: BURGUNDY,
                        color: CREAM,
                        borderBottomRightRadius: "6px",
                      }
                    : {
                        background: "#ffffff",
                        color: NAVY,
                        border: `1px solid ${GOLD}73`,
                        borderBottomLeftRadius: "6px",
                      }
                }
              >
                {msg.role === "user" ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium transition-opacity hover:opacity-80"
                          style={{ color: BURGUNDY }}
                        >
                          {children}
                        </a>
                      ),
                      p: ({ children }) => (
                        <p className="text-sm leading-relaxed mb-2 last:mb-0">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-5 mb-2 last:mb-0">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-5 mb-2 last:mb-0">
                          {children}
                        </ol>
                      ),
                      code: ({ children }) => (
                        <code
                          className="text-xs px-1 py-0.5 rounded"
                          style={{ background: `${GOLD}40`, color: BURGUNDY }}
                        >
                          {children}
                        </code>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}

          {/* Loading dots */}
          {loading && (
            <div className="flex justify-start">
              <div
                className="flex items-center gap-1.5 px-4 py-3 rounded-2xl"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${GOLD}73`,
                  borderBottomLeftRadius: "6px",
                }}
              >
                <span className="sr-only">Athena is thinking</span>
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="block w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: NAVY,
                      animationDelay: `${delay}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex flex-col items-center gap-2 px-4">
              <p
                className="text-xs px-3 py-1.5 rounded-lg text-center"
                style={{ background: `${BURGUNDY}1a`, color: BURGUNDY }}
              >
                Sorry, there&apos;s a problem — {error}
              </p>
              <a
                href="https://athena.motionukict.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-80"
                style={{ background: NAVY, color: CREAM }}
              >
                Try Athena at athena.motionukict.com →
              </a>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ── Input ── */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 shrink-0"
          style={{ borderTop: `1px solid ${GOLD}73` }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={loading}
            maxLength={1000}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-colors duration-200 disabled:opacity-40"
            style={{
              background: "#ffffff",
              color: NAVY,
              border: `1px solid ${GOLD}73`,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = GOLD;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = `${GOLD}73`;
            }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:-translate-y-px disabled:opacity-30 disabled:hover:translate-y-0"
            style={{ background: NAVY, color: CREAM }}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </>
  );
}
