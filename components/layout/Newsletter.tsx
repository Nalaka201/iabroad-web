"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-xs text-accent">Thanks — you&apos;re subscribed!</p>
    );
  }

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email for newsletter"
        className="flex-1 rounded bg-white/[0.06] px-3 py-2.5 text-sm text-white placeholder:text-[#9fb1c7] outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="rounded bg-accent px-3 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-deep hover:text-white"
      >
        Join
      </button>
    </form>
  );
}
