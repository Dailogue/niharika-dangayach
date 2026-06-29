"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-pink/40 px-5 py-20 text-center sm:px-8">
      <div className="mx-auto max-w-xl">
        <h2 className="font-serif text-2xl sm:text-3xl">
          Thanks for stopping by!
        </h2>
        <p className="mt-3 text-sm text-brown/80">
          Sign up for updates and design inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm uppercase tracking-label">
            You&apos;re on the list ✿
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-md items-center border-b border-brown/40"
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-brown/50"
            />
            <button
              type="submit"
              className="shrink-0 px-2 py-3 text-xs uppercase tracking-label hover:text-blush"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
