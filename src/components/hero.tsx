"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  DrawablyArrow,
  DrawablyBadge,
  DrawablyCircle,
  DrawablyHighlight,
  DrawablyLink,
  DrawablyUnderline,
} from "./drawably";

const RESUME_URL = "/Harsh_Vaghamshi_AI_Developer.pdf";
const EMAIL = "mailto:vaghamshiharsh5@gmail.com";

function PenLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-ink">
      <DrawablyUnderline>{children}</DrawablyUnderline>
    </a>
  );
}

export function Hero() {
  const noteRef = useRef<HTMLSpanElement>(null);
  const emailRef = useRef<HTMLSpanElement>(null);
  // The arrow is drawn in document coordinates, so it waits for the fade-in
  // to settle before measuring its anchors.
  const [settled, setSettled] = useState(false);

  return (
    <section id="about" className="pt-12 pb-10 sm:pt-16 sm:pb-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onAnimationComplete={() => setSettled(true)}
      >
        <h1 className="font-pen pen-heavy text-5xl sm:text-6xl leading-[1.1] text-ink">
          Hi, I&apos;m <DrawablyHighlight>Harsh</DrawablyHighlight>.
        </h1>

        <div className="mt-4 font-pen text-base">
          <DrawablyBadge className="px-2.5 py-0.5 text-lg">AI developer</DrawablyBadge>
        </div>

        <div className="mt-7 max-w-2xl space-y-4 text-[15px] sm:text-base leading-relaxed text-ink-2">
          <p>
            <DrawablyHighlight className="text-ink">AI Full-Stack Developer</DrawablyHighlight>{" "}
            building internal AI tools, agents, and automations for DTC e-commerce
            brands across ad operations, AI creative pipelines, marketplace data,
            and customer support. Ships production tools end to end with{" "}
            <DrawablyHighlight className="text-ink">Claude Code</DrawablyHighlight>: LLM
            integration, RAG, and integrations with Meta Ads, Amazon SP-API, Shopify,
            and Walmart. Works directly with founders, marketing, and ops teams to
            turn manual workflows into working software,{" "}
            <DrawablyUnderline className="text-ink">usually in days.</DrawablyUnderline>
          </p>
          <p>
            <DrawablyCircle className="text-ink">Available</DrawablyCircle> for
            freelance or full-time roles.{" "}
            <PenLink href={EMAIL}>Email</PenLink> me, or grab my{" "}
            <PenLink href={RESUME_URL}>resume</PenLink>{" "}
            if you&apos;re curious.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <DrawablyLink
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-base text-ink"
          >
            Resume
          </DrawablyLink>
          <span ref={emailRef} className="inline-flex">
            <DrawablyLink href={EMAIL} variant="solid" className="gap-2 px-5 py-2 text-base">
              <Mail size={16} />
              Email me
            </DrawablyLink>
          </span>
          <span
            ref={noteRef}
            className="ml-8 font-pen text-lg text-ink-3 rotate-[-6deg] select-none"
            aria-hidden="true"
          >
            say hi!
          </span>
        </div>
        {settled && <DrawablyArrow from={noteRef} to={emailRef} width={1.5} />}
      </motion.div>
    </section>
  );
}
