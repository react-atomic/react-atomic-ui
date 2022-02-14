import React from "react";
import { Carousel, HorizontalScroll } from "organism-react-carousel";

const CarouselHorizontalScrollExample = (props) => {
  return (
    <HorizontalScroll
      carouselAttr={{
        style: Styles.carousel,
      }}
    >
      <Carousel>
        <img
          style={Styles.img}
          src="https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
        />
      </Carousel>
      <Carousel>2</Carousel>
      <Carousel>3</Carousel>
      <Carousel>4</Carousel>
      <Carousel>5</Carousel>
    </HorizontalScroll>
  );
};

export default CarouselHorizontalScrollExample;

const Styles = {
  carousel: {
    width: 300,
    height: 300,
    background: "#00558B",
    fontSize: "5rem",
  },
};
