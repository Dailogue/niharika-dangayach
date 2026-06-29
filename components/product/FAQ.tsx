import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    title: "How many spaces can I submit?",
    content:
      "Each consultation covers one room. If you'd like multiple spaces designed, you can book an additional makeover for each room.",
  },
  {
    title: "How long does it take?",
    content:
      "After our initial call, you'll receive your complete design package within three to four weeks.",
  },
  {
    title: "Will I get to chat with the designer?",
    content:
      "Yes! Every package includes a 30-minute one-on-one call to talk through your goals, inspiration, and the room's functional needs.",
  },
  {
    title: "Can I pick the design style?",
    content:
      "Absolutely. We start from your inspiration and preferences, then bring it to life with curated pieces that fit your taste and budget.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="mb-10 font-serif text-2xl uppercase tracking-label sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
