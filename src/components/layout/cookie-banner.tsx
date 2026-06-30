"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "kivuli-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      // storage unavailable, stay hidden
    }
  }, []);

  function decide(value: "accepted" | "managed") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[420px]"
    >
      <div className="flex flex-col gap-4 rounded-lg border border-line-subtle bg-raised p-6">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
          <h2 className="t-title-s text-ink">Your privacy, your call</h2>
        </div>
        <p className="t-body-m text-muted">
          We use only the essentials to keep Kivuli working. Turn on anything more
          only if you want to.
        </p>
        <div className="flex gap-3">
          <Button size="md" onClick={() => decide("accepted")}>
            Accept
          </Button>
          <Button size="md" variant="secondary" onClick={() => decide("managed")}>
            Manage
          </Button>
        </div>
      </div>
    </div>
  );
}
