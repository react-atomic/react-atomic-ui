import React from 'react';
import {Image} from 'react-atomic-molecule';
import {Carousel, CarouselAnimation} from 'organism-react-carousel';

const CarouselAnimationExample = (props)=>
{
    return (
        <CarouselAnimation 
            carouselAttr={{
                style: Styles.carousel
            }}
            style={Styles.container}
        >
            <Carousel>
                <img
                    style={Styles.img}
                    src="https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
                />
            </Carousel>
            <Carousel>
              <Image src="https://live.staticflickr.com/7883/47562596261_cc18fc91b6_b.jpg" /> 
            </Carousel>
            <Carousel>3</Carousel>
            <Carousel>4</Carousel>
            <Carousel>5</Carousel>
        </CarouselAnimation>
    );
};

export default CarouselAnimationExample;

const Styles = {
    container: {
        margin: '0 10%'
    },
    carousel: {
        width: '100%',
        height: 300,
        background: '#00558B'
    },
    img: {
        maxWidth: '100%',
        verticalAlign: 'bottom'
    }
};
