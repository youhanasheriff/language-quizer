import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Language Quizer",
    short_name: "LangQuiz",
    description:
      "Practice Japanese with quizzes and reading exercises. JLPT N5 available.",
    start_url: "/language-quizer/",
    scope: "/language-quizer/",
    display: "standalone",
    background_color: "#0f0f13",
    theme_color: "#7c6cf0",
    icons: [
      {
        src: "/language-quizer/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/language-quizer/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
