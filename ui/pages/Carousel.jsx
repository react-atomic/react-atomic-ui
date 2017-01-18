import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 
import {Carousel, CarouselAnimation} from 'organism-react-carousel';

class CarouselPage extends BasePage
{
    static defaultProps = {
        pageName: 'carousel' 
    };
    render() {
        return (
            <Doc>
                <CarouselAnimation 
                    carouselAttr={{
                        style: Styles.carousel
                    }}
                    style={Styles.slide}
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
                </CarouselAnimation>
            </Doc>
        );
    }
}

export default CarouselPage;

const Styles = {
    slide: {
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
