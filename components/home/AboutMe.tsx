import Image from "next/image";
import OutlineButton from "@/components/ui/OutlineButton";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function AboutMe() {
  const firstName = site.brand.split(" ")[0];
  return (
    <section id="about" className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden">
            <Image
              src={images.aboutPortrait}
              alt={`${site.brand} portrait`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-3 text-xs uppercase tracking-label text-brown/60">
            About Me
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Hi, I&apos;m {firstName}!
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-brown/80">
            <p>
              {site.brand} is a home decor expert who believes everyone deserves
              to live in a beautiful space — no matter their budget. Through
              virtual makeovers and room-by-room design plans, I help renters
              and homeowners fall back in love with where they live.
            </p>
            <p>
              My approach is warm, practical, and endlessly personal: real rooms,
              real budgets, and pieces you can actually shop. Together, we&apos;ll
              take your home from meh to marvellous.
            </p>
          </div>
          <div className="mt-8">
            <OutlineButton href="/products/virtual-makeover-consultation">
              Book a Design Consultation
            </OutlineButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
