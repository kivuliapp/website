"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-md border bg-canvas px-4 text-[15px] text-ink placeholder:text-faint transition-colors focus:outline-none focus-visible:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(form: FormData): Errors {
    const next: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please enter a message.";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-line-subtle bg-raised p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle text-accent">
          <Check className="h-6 w-6" strokeWidth={3} aria-hidden="true" />
        </span>
        <h2 className="t-title-s text-ink">Message sent</h2>
        <p className="t-body-m max-w-[40ch] text-muted">
          Thanks for reaching out. A real person will get back to you within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-line-subtle bg-raised p-6 sm:p-10"
    >
      <Field label="Name" htmlFor="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            inputBase,
            "h-[52px]",
            errors.name
              ? "border-error focus:border-error"
              : "border-line focus:border-focus",
          )}
        />
      </Field>

      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            inputBase,
            "h-[52px]",
            errors.email
              ? "border-error focus:border-error"
              : "border-line focus:border-focus",
          )}
        />
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            inputBase,
            "resize-none py-3.5 leading-relaxed",
            errors.message
              ? "border-error focus:border-error"
              : "border-line focus:border-focus",
          )}
        />
      </Field>

      {status === "error" ? (
        <p className="t-body-m text-error" role="alert">
          Something went wrong sending your message. Please try again, or email us
          directly.
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="t-label-m text-muted">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="t-caption text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
