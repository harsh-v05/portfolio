import { Footer } from "@/components/footer";
import { DrawablyBadge, DrawablyCard } from "@/components/drawably";

export default function BlogPage() {
  return (
    <>
      <div className="py-10">
        <div className="flex items-center gap-3">
          <h1 className="font-pen pen-heavy text-5xl leading-none text-ink">Blog</h1>
          <DrawablyBadge variant="scribble" className="font-pen text-base px-2.5 py-0.5">
            coming soon
          </DrawablyBadge>
        </div>

        <DrawablyCard className="mt-8 p-6 sm:p-8 max-w-xl">
          <p className="font-pen text-2xl text-ink">Nothing here yet.</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
            I&apos;m sharpening the pencil. Notes on building with AI tools,
            Next.js, and shipping fast will land here.
          </p>
        </DrawablyCard>
      </div>
      <Footer />
    </>
  );
}
