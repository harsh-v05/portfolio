"use client";

import { motion } from "framer-motion";
import { DrawablyUnderline } from "./drawably";

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-7 font-pen pen-heavy text-3xl leading-none text-ink"
    >
      <DrawablyUnderline width={2}>{title}</DrawablyUnderline>
    </motion.h2>
  );
}
