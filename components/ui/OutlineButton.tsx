import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  variant?: "outline" | "solid";
  className?: string;
};

const base =
  "inline-flex items-center justify-center px-8 py-3 text-xs sm:text-sm uppercase tracking-label font-medium transition-colors duration-300";

const variants = {
  outline:
    "border border-brown text-brown hover:bg-brown hover:text-cream",
  solid: "bg-brown text-cream hover:bg-blush hover:text-brown",
};

export default function OutlineButton({
  children,
  href,
  onClick,
  external,
  variant = "outline",
  className = "",
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
