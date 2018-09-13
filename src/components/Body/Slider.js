import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Image } from "semantic-ui-react";

import link0 from "../../images/kiddie_tables.jpg";
import link1 from "../../images/lift_and_hydrate.jpg";
import link2 from "../../images/shoe_rack_bamboo_light_weight.jpg";
import link3 from "../../images/slow_cookers_takahi.jpg";
import Title from "./Title";

const imageLinks = [link0, link1, link2, link3];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container text>
        <Title />
        <Slider {...settings}>
          {imageLinks.map((link, index) => {
            return (
              <div key={index}>
                <Image src={link} />
              </div>
            );
          })}
        </Slider>
      </Container>
    );
  }
}
