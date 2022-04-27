import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

class Slider extends React.Component {
  render() {
    return (
      <div className="slider_container">
        <img src="/images/vector.svg" alt="" />
        <div className="slider">
          <Carousel
            breakPoints={breakPoints}
            ref={(ref) => (this.carousel = ref)}
          >
            <div className="slider_div">
              <h3>Universal eBike Kit</h3>
              <div className="slider_div_image">
                <img src="/images/bike1.svg" alt="" width="199" />
              </div>
              <hr className="slider_ruler" />
              <div className="slider_footer">
                <div className="slider_footer_right">
                  <p>Price</p>
                  <p>$750.00</p>
                </div>

                <button className="slider_footer_left">Order</button>
              </div>
            </div>
            <div className="slider_div">
              <h3>Brampoton eBike Kit</h3>
              <div className="slider_div_image">
                <img src="/images/bike1.svg" alt="" width="199" />
              </div>
              <hr className="slider_ruler" />
              <div className="slider_footer">
                <div className="slider_footer_right">
                  <p>Price</p>
                  <p>$750.00</p>
                </div>

                <button className="slider_footer_left">Order</button>
              </div>
            </div>
            <div className="slider_div">
              <h3>Additional eBike Kit</h3>
              <div className="slider_div_image">
                <img src="/images/bike1.svg" alt="" width="199" />
              </div>
              <hr className="slider_ruler" />
              <div className="slider_footer">
                <div className="slider_footer_right">
                  <p>Price</p>
                  <p>$750.00</p>
                </div>

                <button className="slider_footer_left">Order</button>
              </div>
            </div>
            <div className="slider_div">
              <h3>Universal eBike Kit</h3>
              <div className="slider_div_image">
                <img src="/images/bike1.svg" alt="" width="199" />
              </div>
              <hr className="slider_ruler" />
              <div className="slider_footer">
                <div className="slider_footer_right">
                  <p>Price</p>
                  <p>$750.00</p>
                </div>

                <button className="slider_footer_left">Order</button>
              </div>
            </div>
          </Carousel>
          <div className="slider_button">
            <button onClick={() => this.carousel.slidePrev()}>
              {" "}
              <span className="slider_next">&#11013;</span>{" "}
            </button>
            <button onClick={() => this.carousel.slideNext()}>
              {" "}
              <span className="slider_next">&#10145;</span>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
