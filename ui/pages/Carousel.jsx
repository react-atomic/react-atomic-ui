import React from 'react'; 
import CodeExample from 'organism-react-code';

import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

/*example*/
import CarouselAnimation from '../organisms/CarouselAnimation.example';
import carouselAnimation from '!raw-loader!../../../ui/organisms/CarouselAnimation.example';

import CarouselSlide from '../organisms/CarouselSlide.example';
import carouselSlide from '!raw-loader!../../../ui/organisms/CarouselSlide.example';

class CarouselPage extends BasePage
{
    static defaultProps = {
        pageName: 'carousel' 
    };
    render() {
        return (
            <Doc>
                <CodeExample
                    code={carouselAnimation}
                    header="Carousel Animation"
                    git="react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/"
                    npm="organism-react-carousel"
                >
                    <CarouselAnimation />
                </CodeExample>
                <CodeExample
                    code={carouselSlide}
                    header="Carousel Slide (WIP)"
                >
                    <CarouselSlide />
                </CodeExample>
            </Doc>
        );
    }
}

export default CarouselPage;

