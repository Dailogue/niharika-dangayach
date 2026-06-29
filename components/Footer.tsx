import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Learn",
    links: [
      { label: "About", href: "/#about" },
      { label: "Virtual Makeovers", href: "/products/virtual-makeover-consultation" },
      { label: "How It Works", href: "/products/virtual-makeover-consultation#details" },
    ],
  },
  {
    heading: "Apply",
    links: [
      { label: "Apply for a Makeover", href: "/products/virtual-makeover-consultation" },
      { label: "Book a Consultation", href: site.bookingUrl, external: true },
    ],
  },
  {
    heading: "Follow",
    links: [
      { label: "Instagram", href: site.instagramUrl, external: true },
      { label: "YouTube", href: site.youtubeUrl, external: true },
      { label: "TikTok", href: site.tiktokUrl, external: true },
      { label: "Pinterest", href: site.pinterestUrl, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brown px-5 py-16 text-cream sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p
              className="text-3xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {site.brandScript}
            </p>
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Virtual interior makeovers — taking your space from meh to
              marvellous.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs uppercase tracking-label text-cream/60">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cream/90 hover:text-blush"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-cream/90 hover:text-blush"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/20 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <p>Terms &amp; Conditions · Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
