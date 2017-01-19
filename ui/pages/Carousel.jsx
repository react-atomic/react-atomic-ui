import CodeExample from 'organism-react-code';

import BasePage from '../pages/BasePage';
import Doc from '../templates/Doc'; 

/*example*/
import CarouselAnimation from '../organisms/CarouselAnimation.example';
import carouselAnimation from '!raw!../../../ui/organisms/CarouselAnimation.example';

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
            </Doc>
        );
    }
}

export default CarouselPage;

