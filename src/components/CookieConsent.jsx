"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("xu-cookie-consent");
    if (!saved) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("xu-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("xu-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-9998 border-t"
          style={{
            background: "rgba(15, 23, 42, 0.97)",
            borderColor: "#1E293B",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5 shrink-0">🍪</span>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                We use cookies to enhance your experience and analyze traffic.{" "}
                <a
                  href="#"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  See our Privacy Policy.
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 pr-22.5 md:pr-0">
              <button
                onClick={decline}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg shadow-primary/20"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
