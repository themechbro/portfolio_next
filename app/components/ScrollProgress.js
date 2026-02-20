"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef();

  useEffect(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",

      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },

      transformOrigin: "left",
    });
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-slate-200/70 dark:bg-slate-800/70">
      <div
        ref={progressRef}
        className="h-full scale-x-0 bg-[var(--accent)] shadow-[0_0_12px_rgba(37,99,235,0.45)]"
      />
    </div>
  );
}
