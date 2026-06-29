import AnnouncementMarquee from "@/components/AnnouncementMarquee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Hero from "@/components/home/Hero";
import VirtualMakeover from "@/components/home/VirtualMakeover";
import AboutMe from "@/components/home/AboutMe";
import InstagramGrid from "@/components/home/InstagramGrid";

export default function HomePage() {
  return (
    <>
      <AnnouncementMarquee />
      <Header />
      <main>
        <Hero />
        <VirtualMakeover />
        <AboutMe />
        <InstagramGrid />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
