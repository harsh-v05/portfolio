"use client";

import { DrawablyDivider } from "./drawably";

export function Footer() {
  return (
    <footer className="mt-auto pt-6 pb-8">
      <DrawablyDivider className="mb-4" width={1.5} />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-ink-3">
        <p className="font-pen text-lg">
          drawn &amp; developed by <span className="text-ink">Harsh</span>
        </p>
        <p>{new Date().getFullYear()} &copy; all rights reserved.</p>
      </div>
    </footer>
  );
}
