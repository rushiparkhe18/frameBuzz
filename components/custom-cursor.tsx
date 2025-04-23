"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/30 pointer-events-none z-[100] hidden md:flex items-center justify-center mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 120,
          damping: 20,
        }}
      >
        <motion.div
          className="w-1 h-1 bg-white rounded-full"
          animate={{ scale: isHovering ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      <style jsx global>{`
        @media (min-width: 768px) {
          body,
          a,
          button {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
}
