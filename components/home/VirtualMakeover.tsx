import Image from "next/image";
import OutlineButton from "@/components/ui/OutlineButton";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const cards = [
  { src: images.moodboard1, label: "The Mood" },
  { src: images.moodboard2, label: "The Layout" },
  { src: images.moodboard3, label: "The Finishing Touches" },
];

export default function VirtualMakeover() {
  return (
    <section className="bg-peach/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-label text-brown/60">
            Virtual Makeover
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Want {site.brand.split(" ")[0]} to design your space?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-brown/80">
            From a single moodboard to a complete room plan — we&apos;ll
            reimagine your space with curated furniture, colour, and styling
            you can shop yourself.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.12}>
              <figure className="group overflow-hidden bg-cream">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <figcaption
                  className="py-4 text-center text-xl text-brown"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  {card.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <OutlineButton
            href="/products/virtual-makeover-consultation"
            variant="solid"
          >
            Explore the Makeover
          </OutlineButton>
        </Reveal>
      </div>
    </section>
  );
}
