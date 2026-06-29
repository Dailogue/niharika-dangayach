import Image from "next/image";
import OutlineButton from "@/components/ui/OutlineButton";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="bg-cream">
      {/* Full-width lifestyle image */}
      <div className="relative h-[55vh] min-h-[360px] w-full overflow-hidden sm:h-[68vh]">
        <Image
          src={images.hero}
          alt="A warmly styled living room makeover"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Headline + CTA */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Reveal>
            <h1 className="font-serif text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              Take your space from{" "}
              <span className="italic text-blush">meh</span> to{" "}
              <span className="italic">marvellous!</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="md:justify-self-end">
            <p className="mb-6 max-w-md text-base text-brown/80">
              Personalized virtual interior makeovers designed around your
              budget, your style, and the way you actually live.
            </p>
            <OutlineButton href="/products/virtual-makeover-consultation">
              Secure Your Spot
            </OutlineButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
