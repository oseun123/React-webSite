import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

class Testimonials extends React.Component {
  render() {
    return (
      <>
        <div className="testi">
          <img className="testi_img" src="/images/grp.svg" alt="" />
          <h1 className="testi_header">What our customer are saying</h1>
          <Carousel
            breakPoints={breakPoints}
            ref={(ref) => (this.carousel = ref)}
          >
            <div className="testi_slider">
              <div className="testi_slider_left">
                <img src="/images/pre.svg" alt="" />
                <h3>Edward Newgate</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="testi_slider_right">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
            <div className="testi_slider">
              <div className="testi_slider_left">
                <img src="/images/pre.svg" alt="" />
                <h3>Edward Newgate</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="testi_slider_right">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
            <div className="testi_slider">
              <div className="testi_slider_left">
                <img src="/images/pre.svg" alt="" />
                <h3>Edward Newgate</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="testi_slider_right">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
            <div className="testi_slider">
              <div className="testi_slider_left">
                <img src="/images/pre.svg" alt="" />
                <h3>Edward Newgate</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="testi_slider_right">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
            <div className="testi_slider">
              <div className="testi_slider_left">
                <img src="/images/pre.svg" alt="" />
                <h3>Edward Newgate</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="testi_slider_right">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
            <div className="testi_slider">
              <div className="testi_slider_left">
                <img src="/images/pre.svg" alt="" />
                <h3>Edward Newgate</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="testi_slider_right">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="testi_arrow">
          <button onClick={() => this.carousel.slidePrev()}>
            {" "}
            <span className="testi_next">&#11013;</span>{" "}
          </button>
          <button onClick={() => this.carousel.slideNext()}>
            {" "}
            <span className="testi_next">&#10145;</span>{" "}
          </button>
        </div>
      </>
    );
  }
}

export default Testimonials;
