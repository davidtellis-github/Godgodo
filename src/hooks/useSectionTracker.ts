import { useEffect, useState } from "react";
import { SECTION_IDS } from "../sectionConfig";

export function useSectionTracker(): string {
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const check = () => {
      // Mid-point of the visible viewport
      const mid = container.scrollTop + container.clientHeight * 0.5;

      // Walk backwards — last section whose top is above mid wins
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= mid) {
          setActiveId(SECTION_IDS[i]);
          return;
        }
      }
    };

    container.addEventListener("scroll", check, { passive: true });
    check(); // run once on mount

    return () => container.removeEventListener("scroll", check);
  }, []);

  return activeId;
}
