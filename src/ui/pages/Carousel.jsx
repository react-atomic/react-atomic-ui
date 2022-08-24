import CodeExample from "organism-react-code";
import usePage from "../../usePage";

/*example*/
import CarouselAnimation from "../organisms/CarouselAnimation.example";
import carouselAnimation from "../../../../../src/ui/organisms/CarouselAnimation.example.jsx?raw";

import CarouselAnimationHideThumb from "../organisms/CarouselAnimationHideThumb.example";
import carouselAnimationHideThumb from "../../../../../src/ui/organisms/CarouselAnimationHideThumb.example.jsx?raw";

import CarouselHorizontalScroll from "../organisms/CarouselHorizontalScroll.example";
import carouselHorizontalScroll from "../../../../../src/ui/organisms/CarouselHorizontalScroll.example.jsx?raw";

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

      <CodeExample
        code={carouselHorizontalScroll}
        header="Carousel Horizontal Scroll"
      >
        <CarouselHorizontalScroll />
      </CodeExample>
    </>
  );
};

export default CarouselPage;
