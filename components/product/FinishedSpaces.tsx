import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";

const spaces = [images.space1, images.space2, images.space3, images.space4];

export default function FinishedSpaces() {
  return (
    <section className="bg-peach/40 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl uppercase tracking-label sm:text-3xl">
            More of Your Finished Spaces
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {spaces.map((src, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Finished space ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
