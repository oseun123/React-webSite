import React from "react";

function Banner() {
  return (
    <>
      <div className="banner">
        <img className="banner_dot" src="/images/header_dot.svg" alt="" />
        <div className="banner_hero">
          <div className="banner_hero_info_sect">
            <h1>Your Bike Electric Update</h1>
            <p>
              Dummy text progressive, and affordable healthcare, accessible on
              mobile and online for everyone
            </p>
            <div className="banner_hero_search">
              <span className="banner_hero_group">
                <img src="/images/search.svg" alt="" />
                <input type="text" placeholder="Search Bike or anything" />
              </span>
              <button className="banner_hero_button">Find</button>
            </div>
          </div>
          <div className="banner_hero_img_sect">
            <img
              className="banner_hero_img"
              src="/images/hero_img2.svg"
              alt=""
              width="411"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
