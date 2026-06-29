import type { Metadata } from "next";
import AnnouncementMarquee from "@/components/AnnouncementMarquee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Gallery from "@/components/product/Gallery";
import ProductInfo from "@/components/product/ProductInfo";
import IntroVideo from "@/components/product/IntroVideo";
import BeforeAfter from "@/components/product/BeforeAfter";
import FinishedSpaces from "@/components/product/FinishedSpaces";
import FAQ from "@/components/product/FAQ";

export const metadata: Metadata = {
  title: "Virtual Makeover Consultation — Niharika Dangayach",
  description:
    "Let Niharika design your space. Book a virtual makeover consultation and take your home from meh to marvellous.",
};

export default function VirtualMakeoverPage() {
  return (
    <>
      <AnnouncementMarquee />
      <Header />
      <main>
        <section className="bg-cream px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-14">
            <Gallery />
            <ProductInfo />
          </div>
        </section>

        <IntroVideo />
        <BeforeAfter />
        <FinishedSpaces />
        <FAQ />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
