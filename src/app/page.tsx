import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { DrawablyLink } from "@/components/drawably";
import { allProjects } from "@/lib/projects-data";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <div className="py-8">
        <Projects projects={allProjects.slice(0, 2)} />
        <div className="mt-6 flex justify-end">
          <DrawablyLink href="/projects" className="gap-1.5 px-4 py-1.5 font-pen text-lg text-ink">
            view all projects <ArrowRight className="h-4 w-4" />
          </DrawablyLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
