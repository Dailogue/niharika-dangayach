"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Virtual Makeovers", href: "/products/virtual-makeover-consultation" },
  { label: "About", href: "/#about" },
  { label: "Instagram", href: site.instagramUrl, external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brown/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Left: menu */}
        <div className="flex flex-1 items-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-label md:hidden"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-px w-5 bg-brown" />
              <span className="block h-px w-5 bg-brown" />
            </span>
          </button>
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-label hover:text-blush"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs uppercase tracking-label hover:text-blush"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Center: script logo */}
        <Link
          href="/"
          className="flex-1 whitespace-nowrap text-center font-script text-2xl sm:text-3xl text-brown"
          style={{ fontFamily: "var(--font-script)" }}
        >
          {site.brandScript}
        </Link>

        {/* Right: CTA */}
        <div className="flex flex-1 items-center justify-end">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs uppercase tracking-label hover:text-blush sm:inline"
          >
            Book a Call
          </a>
        </div>
      </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-brown/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed left-0 top-0 z-50 h-full w-72 bg-cream p-8 md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mb-10 text-xs uppercase tracking-label"
                aria-label="Close menu"
              >
                Close ✕
              </button>
              <nav className="flex flex-col gap-6">
                {navLinks.map((l) =>
                  l.external ? (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="text-sm uppercase tracking-label"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-sm uppercase tracking-label"
                    >
                      {l.label}
                    </Link>
                  )
                )}
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-label"
                >
                  Book a Call
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
