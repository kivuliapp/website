import { cn } from "@/lib/utils";

/**
 * The Kivuli mark: a full gold value coin, a faint base ring, a single verdigris
 * orbit arc, and a satellite dot. Paths exported verbatim from the Figma source.
 * Gold + base ring are brand-fixed; the orbit arc and dot flip with the theme.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M52 91.8667C74.0177 91.8667 91.8666 74.0178 91.8666 52C91.8666 29.9823 74.0177 12.1334 52 12.1334C29.9822 12.1334 12.1333 29.9823 12.1333 52C12.1333 74.0178 29.9822 91.8667 52 91.8667Z"
        stroke="#2C544E"
        strokeWidth="1.73333"
      />
      <path
        d="M52 77.1333C65.8808 77.1333 77.1334 65.8807 77.1334 52C77.1334 38.1192 65.8808 26.8666 52 26.8666C38.1193 26.8666 26.8667 38.1192 26.8667 52C26.8667 65.8807 38.1193 77.1333 52 77.1333Z"
        fill="#F4C97A"
      />
      <path
        d="M52 12.1334C62.5733 12.1334 72.7135 16.3336 80.19 23.81C87.6664 31.2865 91.8667 41.4267 91.8667 52"
        stroke="var(--accent)"
        strokeWidth="2.16667"
        strokeLinecap="round"
      />
      <path
        d="M52 16.0333C54.1539 16.0333 55.9 14.2872 55.9 12.1333C55.9 9.97943 54.1539 8.23334 52 8.23334C49.8461 8.23334 48.1 9.97943 48.1 12.1333C48.1 14.2872 49.8461 16.0333 52 16.0333Z"
        fill="var(--accent-pressed)"
      />
    </svg>
  );
}
