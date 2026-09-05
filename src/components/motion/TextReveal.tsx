"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ElementType, Fragment } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** stagger step between words, seconds */
  step?: number;
}

/** Reveals a line of text word-by-word, each word rising and fading in. */
export default function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  step = 0.06,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <motion.span
            className="inline-block"
            initial={{ y: "0.5em", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: delay + i * step, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
