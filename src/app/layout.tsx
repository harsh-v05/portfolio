import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Drawably Pen: the same strokes the sketches are drawn with, as a typeface.
const pen = localFont({
  src: "../../node_modules/drawably/font/DrawablyPen.ttf",
  variable: "--font-drawably-pen",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khushal | AI Developer",
  description:
    "Crafting smooth interfaces, clean systems, and shipping like a reflex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <SmoothScroll>
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
            <div className="min-h-screen flex flex-col">
              <main className="flex-1 flex flex-col">{children}</main>
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
