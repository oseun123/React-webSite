import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("navbar_link");
  const navToggle = () => {
    if (active === "navbar_link") {
      setActive("navbar_link navbar_active");
    } else setActive("navbar_link");
  };
  return (
    <nav className="Navbar">
      <div className="navbar_container">
        <div className="navbar_logo">
          <img src="/images/logo.svg" alt="" width="116" />
        </div>
        <div className={active}>
          <ul>
            <li>Product</li>
            <li>Bike Type</li>
            <li>About us</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <FaBars className="navbar_sm_btn" onClick={navToggle} />
      </div>
    </nav>
  );
}

export default Navbar;
