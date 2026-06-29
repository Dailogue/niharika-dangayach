import OutlineButton from "@/components/ui/OutlineButton";
import Accordion from "@/components/ui/Accordion";
import { site } from "@/lib/site";

const details = [
  {
    title: "What You'll Receive",
    content:
      "A personalized digital moodboard, a to-scale floor plan, a curated shopping list with direct links, and a styling guide so you can recreate the look at your own pace.",
  },
  {
    title: "The Details",
    content:
      "This package includes an initial 30-minute call where we'll discuss your hopes for the space, review your inspiration, and chat through the functional problems of the room. The studio takes it from there and delivers your full design.",
  },
];

export default function ProductInfo() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
        Call With {site.brand.split(" ")[0]} + Virtual Makeover Consultation
      </h1>

      <p className="mt-4 text-2xl text-brown">{site.consultationPrice}</p>

      <p className="mt-5 max-w-md text-base leading-relaxed text-brown/80">
        Let {site.brand.split(" ")[0]}{" "}design your space! Together,
        we&apos;ll take your home from meh to marvellous.
      </p>

      <p className="mt-6 text-xs uppercase tracking-label text-blush">
        Only 2 spots left this season
      </p>

      <div className="mt-6">
        <OutlineButton href={site.bookingUrl} external variant="solid">
          Book a Consultation
        </OutlineButton>
      </div>

      <div className="mt-10">
        <Accordion items={details} defaultOpen={0} />
      </div>
    </div>
  );
}
