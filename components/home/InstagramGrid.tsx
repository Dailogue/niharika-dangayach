import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const posts = [
  { src: images.insta1, caption: "Loved this colour-drenched room makeover!" },
  { src: images.insta2, caption: "A cosy reading nook that does it all." },
  { src: images.insta3, caption: "Mid-century modern studio for the win!" },
  { src: images.insta4, caption: "Small space, big personality." },
  { src: images.insta5, caption: "Butter-yellow kitchen dreams ✿" },
];

export default function InstagramGrid() {
  const handle = site.instagramHandle.toUpperCase();
  return (
    <section className="bg-cream-pink px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-label hover:text-blush"
          >
            {handle} on Instagram
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {posts.map((post, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <Image
                  src={post.src}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-brown/55 p-3 text-center text-xs text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {post.caption}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
