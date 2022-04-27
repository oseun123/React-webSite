import React from "react";

function Desc() {
  return (
    <div className="desc">
      <img src="/images/vector2.svg" alt="" />
      <div className="desc_section">
        <div className="desc_right">
          <div className="desc_div">
            <div className="desc_div_image">
              <img src="/images/add.svg" alt="" />
            </div>
            <hr className="desc_ruler" />
            <div className="desc_footer">
              <div className="desc_footer_right">
                <p>Price</p>
                <p>$750.00</p>
              </div>

              <button className="desc_footer_left">Order</button>
            </div>
          </div>
        </div>
        <div className="desc_left">
          <h1>Hybrid Bikes</h1>
          <p>
            Dummy Text progressive, and affordable healthcare, accessible on
            mobile and online for everyone. To us, it’s not just work. We take
            pride in the solutions we deliver
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Desc;
