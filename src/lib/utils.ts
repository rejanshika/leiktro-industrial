import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Track the cursor over an element as CSS vars --mx/--my (for spotlight hover glows). */
export function spotlightMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
}

/** Cursor-driven 3D tilt + spotlight for cards. Sets --mx/--my (glow),
 *  --rx/--ry (rotation, deg) and --tz (0→1 lift factor) on the element. */
export function tiltMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  el.style.setProperty("--mx", `${px * 100}%`);
  el.style.setProperty("--my", `${py * 100}%`);
  el.style.setProperty("--rx", `${(px - 0.5) * 9}deg`);
  el.style.setProperty("--ry", `${-(py - 0.5) * 9}deg`);
  el.style.setProperty("--tz", "1");
}

export function tiltReset(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--tz", "0");
}
