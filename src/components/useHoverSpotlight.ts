"use client";

import { useState, type MouseEvent } from "react";

/**
 * Tracks which item in a list is hovered, and the cursor position within
 * whichever card is currently hovered (for a spotlight effect). Siblings
 * can use `hovered !== null && hovered !== id` to dim/blur themselves.
 */
export function useHoverSpotlight<T extends string>() {
  const [hovered, setHovered] = useState<T | null>(null);

  function bind(id: T) {
    return {
      onMouseEnter: () => setHovered(id),
      onMouseLeave: () => setHovered((h) => (h === id ? null : h)),
      onMouseMove: (e: MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      },
    };
  }

  return { hovered, bind };
}
