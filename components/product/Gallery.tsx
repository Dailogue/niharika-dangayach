"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/images";

const gallery = [
  { src: images.product1, label: "Your First Glimpse" },
  { src: images.product2, label: "The Lighting" },
  { src: images.product3, label: "The Floor Plan" },
  { src: images.product4, label: "The Styling" },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden bg-peach/30">
        <Image
          key={active}
          src={gallery[active].src}
          alt={gallery[active].label}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span
          className="absolute bottom-4 left-4 text-xl text-cream drop-shadow"
          style={{ fontFamily: "var(--font-script)" }}
        >
          {gallery[active].label}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {gallery.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden border transition-colors ${
              active === i ? "border-brown" : "border-transparent"
            }`}
            aria-label={`View ${item.label}`}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
