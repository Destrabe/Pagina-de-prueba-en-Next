"use client";

import { useEffect } from "react";

function TitleChanger() {
  useEffect(() => {
    /*
    gui
    */
    const originalTitle = document.title;

    const handleVisibility = () => {
      if (document.hidden) {
        document.title = "¡NO TE VAYAS!";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);
  return null;
}

export default TitleChanger;
