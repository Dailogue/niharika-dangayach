import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";

export default function BeforeAfter() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={images.moodboardBefore}
                alt="Josh's moodboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3
              className="mt-4 text-2xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Josh&apos;s Moodboard
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={images.after}
                alt="Josh's finished space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3
              className="mt-4 text-2xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Josh&apos;s After
            </h3>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-label text-brown/60">
            — Josh, Virtual Makeover Client —
          </p>
          <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">
            &ldquo;My kitchen is now one of my favourite places in my home. I
            never thought I&apos;d want to marry a room, but here we are.&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
