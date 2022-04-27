import React from "react";

function Footer() {
  return (
    <div className="footer">
      <img className="footer_img" src="/images/grp.png" alt="" />
      <img className="footer_img1" src="/images/ment.svg" alt="" />
      <div className="footer_container">
        <div className="footer_min_width">
          <div className="footer_box1">
            <div className="img_box">
              <img src="/images/el.png" alt="" />
              <img src="/images/ebi.png" alt="" />
            </div>
            <p className="footer_box1_p1">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p>©eBike 2021. All rights reserved</p>
          </div>
          <div className="footer_box2">
            <h3>Campany</h3>
            <ul>
              <li>Product</li>
              <li>Bike Type</li>
              <li>About us </li>
              <li> Contact</li>
            </ul>
          </div>
          <div className="footer_box3">
            <h3>Help</h3>
            <ul>
              <li>Help center</li>
              <li>Contact support </li>
              <li>Instructions</li>
              <li> How it works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
