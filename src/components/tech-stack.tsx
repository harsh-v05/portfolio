import { SectionTitle } from "@/components/section-title";
import { DrawablyCard, DrawablyList } from "@/components/drawably";

const techStack = [
  { category: "Languages", items: "JavaScript, TypeScript" },
  {
    category: "Frameworks & Libraries",
    items: "React.js, Next.js, Node.js, Express.js, Tailwind CSS, shadcn/ui",
  },
  { category: "Databases", items: "Supabase, PostgreSQL" },
  { category: "AI Engineering", items: "Anthropic API (Claude), RAG, agents, prompt engineering, Jev (TypeSafe), Composio, Hermes" },
  { category: "Automation & AI Media", items: "n8n, Apify, ClickUp, Higgsfield, Veo 3, ElevenLabs" },
  { category: "APIs & Payments", items: "Meta Ads API, Amazon SP-API, Walmart API, Shopify API, Stripe" },
  { category: "DevOps", items: "Vercel, VPS, Docker" },
  { category: "Tools", items: "Claude Code, GitHub" },
];

export function TechStack() {
  return (
    <div>
      <SectionTitle title="Tech stack I work with" />
      <DrawablyCard className="p-5 sm:p-6">
        <DrawablyList marker="check" className="space-y-3 text-[15px] leading-relaxed text-ink-2">
          {techStack.map(({ category, items }) => (
            <li key={category}>
              <span className="font-pen text-lg text-ink">{category}</span>
              <span className="text-ink-3"> &mdash; </span>
              {items}
            </li>
          ))}
        </DrawablyList>
      </DrawablyCard>
    </div>
  );
}
