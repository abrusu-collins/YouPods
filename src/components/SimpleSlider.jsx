import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../img/img1.png";
import img3 from "../img/img3.png";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style = {{width:"50%"}}>
        
        <Slider {...settings}>
          <div>
            <img src={img1} alt="img1" />
          </div>
          <div>
            <img src={img3} alt="img3" />
          </div>
          <div>
            <img src={img3} alt="img3" />
          </div>
          
          
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;