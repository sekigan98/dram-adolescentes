"use client";
import { motion } from "framer-motion";

interface MotionFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  ease?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function MotionFade({
  children,
  delay = 0,
  duration = 0.6,
  ease = "easeOut",
  direction = "up",
}: MotionFadeProps) {
  const offset = 8; // desplazamiento base
  const initial = {
    opacity: 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    x: direction === "left" ? offset : direction === "right" ? -offset : 0,
  };

  return (
    <motion.div
      role="presentation"
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
