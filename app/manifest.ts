import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeDojo: Hack-A-Ton 2026",
    short_name: "Hack-A-Ton",
    description:
      "CodeDojo is a 24-hour Motion-U hackathon. Form a team, pick your dojo, and build something worth bragging about — October 16-17, 2026.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff9eb",
    theme_color: "#7a1620",
    icons: [
      {
        src: "/logo-hackaton.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
