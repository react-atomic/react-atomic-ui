import React from "react";
import { Image } from "react-atomic-molecule";
import { Carousel, CarouselAnimation } from "organism-react-carousel";

const CarouselAnimationExample = (props) => {
  return (
    <CarouselAnimation
      carouselAttr={{
        style: Styles.carousel,
      }}
      carouselListStyle={Styles.carouselList}
      style={Styles.container}
    >
      <Carousel>
        <img
          style={Styles.img}
          src="https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
        />
      </Carousel>
      <Carousel>
        <Image
          style={Styles.img}
          src="https://source.unsplash.com/random"
        />
      </Carousel>
      <Carousel>3</Carousel>
      <Carousel>4</Carousel>
      <Carousel>5</Carousel>
    </CarouselAnimation>
  );
};

export default CarouselAnimationExample;

const height = 300;

const Styles = {
  container: {
    margin: "0 10%",
  },
  carouselList: {
    minHeight: height + 5,
  },
  carousel: {
    width: "100%",
    height,
    background: "#00558B",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    verticalAlign: "bottom",
  },
};
