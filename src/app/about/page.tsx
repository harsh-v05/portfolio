import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";
import { DrawablyHighlight } from "@/components/drawably";

export default function AboutPage() {
  return (
    <>
      <div className="py-10 space-y-12">
        <div>
          <h1 className="font-pen pen-heavy text-5xl leading-none text-ink">About me</h1>
          <p className="mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink-2">
            I am an{" "}
            <DrawablyHighlight className="text-ink">AI full-stack developer</DrawablyHighlight>{" "}
            who loves exploring new AI tools and technologies. I enjoy
            experimenting with innovative ideas, implementing them into
            real-world solutions, and quickly shipping products. I&apos;m
            passionate about staying updated with the latest advancements in AI
            and continuously improving my skills to build smarter, more
            efficient systems.
          </p>
        </div>

        <TechStack />
      </div>
      <Footer />
    </>
  );
}
