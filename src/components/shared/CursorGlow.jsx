"use client";

import { useState, useEffect, useRef } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: -300, y: -300 });
  const currentRef = useRef({ x: -300, y: -300 });

  useEffect(() => {
    // Only activate on true pointer devices (desktop)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    const animate = () => {
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      currentRef.current.x += dx * 0.1;
      currentRef.current.y += dy * 0.1;
      setPos({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed pointer-events-none rounded-full"
      style={{
        width: 200,
        height: 200,
        top: 0,
        left: 0,
        zIndex: -1,
        background:
          "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
        willChange: "transform",
      }}
    />
  );
}
