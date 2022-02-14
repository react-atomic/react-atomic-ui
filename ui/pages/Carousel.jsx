import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

/*example*/
import CarouselAnimation from "../organisms/CarouselAnimation.example";
import carouselAnimation from "!raw-loader!../../../../ui/organisms/CarouselAnimation.example";

import CarouselAnimationHideThumb from "../organisms/CarouselAnimationHideThumb.example";
import carouselAnimationHideThumb from "!raw-loader!../../../../ui/organisms/CarouselAnimationHideThumb.example";

import CarouselHorizontalScroll from "../organisms/CarouselHorizontalScroll.example";
import carouselHorizontalScroll from "!raw-loader!../../../../ui/organisms/CarouselHorizontalScroll.example";

const CarouselPage = (props) => {
  usePage({ ...props, pageName: "Carousel" });
  return (
    <>
      <CodeExample
        code={carouselAnimation}
        header="Carousel Animation"
        git="react-atomic/react-atomic-organism/blob/main/packages/organism-react-carousel/"
        npm="organism-react-carousel"
      >
        <CarouselAnimation />
      </CodeExample>

      <CodeExample
        code={carouselAnimationHideThumb}
        header="Carousel Animation Hide Thumb"
        git="react-atomic/react-atomic-organism/blob/main/packages/organism-react-carousel/"
        npm="organism-react-carousel"
      >
        <CarouselAnimationHideThumb />
      </CodeExample>

      <CodeExample code={carouselHorizontalScroll} header="Carousel Horizontal Scroll">
        <CarouselHorizontalScroll />
      </CodeExample>
    </>
  );
};

export default CarouselPage;
