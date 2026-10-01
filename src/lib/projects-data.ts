export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

export const allProjects: Project[] = [
  {
    id: 4,
    name: "Sorta",
    description:
      "Gmail triage in plain words. Jev sorts your inbox into categories you define in a sentence, then sweeps spam, scams and newsletters in one click. Typed judgments and calibrated probabilities instead of generated text, with live mail and row-level security.",
    tags: ["Next.js", "TypeScript", "Supabase", "Composio", "Jev", "shadcn/ui"],
    liveLink: "https://sorta-kappa.vercel.app/",
    image: "/Sorta.png",
  },
  {
    id: 1,
    name: "FeedLoop",
    description:
      "Paste any reel — we'll turn it into a recipe, a place, or a trip you'll actually use. It scrapes the reel, analyses the video with Gemini, and enriches it into structured recipes and locations you can search and save.",
    tags: ["Next.js", "TypeScript", "Express", "Supabase", "Gemini", "Apify"],
    liveLink: "https://feedloop-fe.vercel.app/",
    image: "/FeedLoop.png",
  },
  {
    id: 3,
    name: "Web Brush",
    description:
      "Draw freely. Watch clean silk strands and orb-web patches weave themselves along every stroke — with a spider that patrols, bridges, and settles on your threads.",
    tags: ["JavaScript", "Canvas", "Generative Art"],
    liveLink: "/web-brush.html",
    image: "/WebBrush.png",
  },
];
