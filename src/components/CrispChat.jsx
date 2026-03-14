"use client";

// Replace with your actual ID from crisp.chat — free account, unlimited chats
const CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID";

import { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
    const s = document.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return null;
}
