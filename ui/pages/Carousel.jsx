import CodeExample from "organism-react-code";

import BasePage from "../molecules/BasePage";

/*example*/
import CarouselAnimation from "../organisms/CarouselAnimation.example";
import carouselAnimation from "!raw-loader!../../../../ui/organisms/CarouselAnimation.example";

import CarouselAnimationHideThumb from "../organisms/CarouselAnimationHideThumb.example";
import carouselAnimationHideThumb from "!raw-loader!../../../../ui/organisms/CarouselAnimationHideThumb.example";

import CarouselSlide from "../organisms/CarouselSlide.example";
import carouselSlide from "!raw-loader!../../../../ui/organisms/CarouselSlide.example";

class CarouselPage extends BasePage {
  static defaultProps = {
    pageName: "Carousel",
  };
  render() {
    return (
      <>
        <CodeExample
          code={carouselAnimation}
          header="Carousel Animation"
          git="react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/"
          npm="organism-react-carousel"
        >
          <CarouselAnimation />
        </CodeExample>

        <CodeExample
          code={carouselAnimationHideThumb}
          header="Carousel Animation Hide Thumb"
          git="react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/"
          npm="organism-react-carousel"
        >
          <CarouselAnimationHideThumb />
        </CodeExample>

        <CodeExample code={carouselSlide} header="Carousel Slide (WIP)">
          <CarouselSlide />
        </CodeExample>
      </>
    );
  }
}

export default CarouselPage;
