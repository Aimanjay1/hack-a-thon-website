import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "CodeDojo: Hack-A-Ton 2026 — 24-hour high school hackathon at KICT, IIUM, October 15-17, 2026.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await readFile(
    path.join(process.cwd(), "app", "AlfaSlabOne-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#022251",
          padding: "64px 72px",
          color: "#fff9eb",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              backgroundColor: "#f4bc6a",
              color: "#1d3557",
              padding: "10px 24px",
              fontSize: "28px",
              letterSpacing: "4px",
            }}
          >
            CODEDOJO 2026
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: '"Alfa Slab One"',
              fontSize: "108px",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            <span>Hack-</span>
            <span style={{ color: "#f4bc6a" }}>A</span>
            <span>-Ton</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#fff9eb",
              maxWidth: "900px",
            }}
          >
            The 24-hour high school hackathon. Form a team, pick your dojo,
            and build something worth bragging about.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            letterSpacing: "2px",
            color: "#f4bc6a",
            textTransform: "uppercase",
          }}
        >
          <span>Oct 15–17, 2026</span>
          <span>KICT, IIUM · Motion-U</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Alfa Slab One",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
