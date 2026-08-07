import { NextResponse } from "next/server";
import axios from "axios";

const backendUrl = "https://api.motionukict.com";

const MAX_QUESTION_LENGTH = 1000;

export async function POST(request: Request) {
  const apiKey = process.env.MOTIONU_API_KEY;

  if (!apiKey) {
    console.error("MOTIONU_API_KEY is not set — check .env.local");
    return NextResponse.json(
      { error: "Athena is not configured" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const { question, history, top_k } = body;

    if (typeof question !== "string" || !question.trim()) {
      return NextResponse.json(
        { error: "A question is required" },
        { status: 400 },
      );
    }

    if (question.length > MAX_QUESTION_LENGTH) {
      return NextResponse.json(
        { error: "That question is too long" },
        { status: 400 },
      );
    }

    const payload = {
      question: question.trim(),
      history: typeof history === "string" ? history : "",
      top_k: typeof top_k === "number" ? top_k : 5,
    };

    const res = await axios.post(
      `${backendUrl}/api/v1/rag/questions/athena`,
      payload,
      {
        headers: {
          "x-motionu-key": apiKey,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      },
    );

    return NextResponse.json({ answer: res.data.answer });
  } catch (err) {
    // Log the real cause on the server; never leak it to the browser.
    if (axios.isAxiosError(err)) {
      console.error("Athena API error:", err.response?.status, err.response?.data ?? err.message);
      return NextResponse.json(
        { error: "Failed to fetch response from Athena" },
        { status: err.response?.status ?? 502 },
      );
    }

    console.error("Athena route error:", err);
    return NextResponse.json(
      { error: "Failed to fetch response from Athena" },
      { status: 500 },
    );
  }
}
