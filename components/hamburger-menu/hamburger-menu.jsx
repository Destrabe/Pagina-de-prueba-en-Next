"use client";

import { useState } from "react";
import "./hamburger-menu.css";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)}>
      <div className={`toggle ${open ? "active" : ""}`}>
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
