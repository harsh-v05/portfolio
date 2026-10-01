"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarIcon } from "lucide-react";
import { SectionTitle } from "./section-title";
import { DrawablyBadge, DrawablyCard, DrawablyLink, DrawablyList } from "./drawably";

// Edit this array to add, remove, or update experiences
const experiences = [
  {
    company: "Hustle AI",
    url: "https://hustleapp.co/",
    role: "AI Full-Stack Developer",
    type: "Remote",
    period: "Freelance",
    bullets: [
      "Built a multi-account Meta Ads CRM that connects multiple Business Managers and ad accounts to one dashboard.",
      "Built bulk launch workflows that create campaigns, ad sets, and ads across multiple accounts in one flow.",
      "Built an AI creative pipeline with Higgsfield, Veo 3, and ElevenLabs that generates image and video ads and pushes them straight into campaigns.",
      "Built rule-based automation that pauses, scales, and adjusts budgets and bids from performance thresholds.",
      "Worked directly with the founders and media buyers to scope features and own tools from idea to production.",
    ],
    techStack: "React, Next.js, Node.js, Supabase, Meta Marketing API, Higgsfield, Veo 3, ElevenLabs",
  },
  {
    company: "Mini Mic Pro",
    url: "https://minimicpro.com/",
    role: "AI Developer",
    type: "Remote",
    period: "Freelance",
    bullets: [
      "Partnered directly with the founder to build Thread AI, a seller CRM where sellers connect Amazon, Walmart, and Shopify to manage products, orders, and customer feedback.",
      "Built an AI support agent with the Anthropic API, tool use, and RAG over company policies and product data.",
      "Added human-in-the-loop approval for payment queries, routed to ClickUp tickets before any reply goes out.",
      "Built n8n workflows that scrape competitor ads with Apify and generate new ad concepts and media.",
    ],
    techStack: "Next.js, Node.js, Supabase, Amazon SP-API, Walmart API, Shopify API, Anthropic API, Stripe, n8n, Apify",
  },
];

export function Experience() {
  return (
    <section className="py-8">
      <SectionTitle title="Places I've made an impact" />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <DrawablyCard className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-pen text-3xl leading-none text-ink">{exp.company}</h3>
                <div className="flex items-center gap-1.5 text-sm text-ink-3">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="mt-2 mb-4 flex items-center gap-2">
                <span className="text-[15px] text-ink-2">{exp.role}</span>
                <DrawablyBadge className="font-pen text-sm" width={1.5}>
                  {exp.type}
                </DrawablyBadge>
              </div>

              <DrawablyList marker="dash" className="space-y-1.5 text-[15px] leading-relaxed text-ink-2">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
                {exp.techStack && (
                  <li>
                    <span className="text-ink">Tech stack: </span>
                    {exp.techStack}
                  </li>
                )}
              </DrawablyList>

              {exp.url && (
                <div className="mt-4 flex font-pen text-base">
                  <DrawablyLink
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-1 px-3 py-1 text-ink"
                    width={1.5}
                  >
                    live <ArrowUpRight className="h-3.5 w-3.5" />
                  </DrawablyLink>
                </div>
              )}
            </DrawablyCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
