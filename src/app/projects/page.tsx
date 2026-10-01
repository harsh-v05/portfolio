import { ArrowLeft } from "lucide-react";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { DrawablyLink } from "@/components/drawably";

export default function ProjectsPage() {
  return (
    <>
      <div className="py-10">
        <div className="mb-8">
          <DrawablyLink href="/" className="gap-1.5 px-3 py-1 font-pen text-lg text-ink" tone="neutral">
            <ArrowLeft className="h-4 w-4" />
            back
          </DrawablyLink>
        </div>

        <h1 className="font-pen pen-heavy text-5xl leading-none text-ink">Projects</h1>
        <p className="mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink-2">
          Every project you see here is something I&apos;ve built with intent:
          to learn, to improve, or to solve a real-world need. Whether
          it&apos;s a crisp UI or a full-stack system, I care about making
          things that actually work and feel great to use.
        </p>

        <div className="mt-12">
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}
