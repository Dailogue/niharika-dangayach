import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function IntroVideo() {
  return (
    <section id="details" className="bg-pink/30 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-label text-brown/60">
            Introducing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            My Virtual Makeover
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-brown/80">
            A design service built for real homes and real budgets. Here&apos;s
            how {site.brand.split(" ")[0]} reimagines your space, step by step.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="group relative aspect-video w-full overflow-hidden">
            <Image
              src={images.introVideoPoster}
              alt="Design service preview"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-brown/25 transition-colors group-hover:bg-brown/35">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-cream/90 text-brown">
                <span className="ml-1 text-2xl">▶</span>
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
