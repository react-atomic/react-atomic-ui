import get from "get-object-value";

import {
  FullScreenExample as FullScreen,
  FullScreenUrl,
} from "organism-react-code";

const FullScreenExample = () => (
  <>
    <p>
      <FullScreen id="full-screen-example" button="open full screen">
        test
      </FullScreen>
    </p>
    <p>
      <FullScreen
        scrolling
        id="full-screen-scroll-example"
        button="open full screen with scroll"
      >
        <>
          <p>test1--->Start</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test2--->End</p>
        </>
      </FullScreen>
    </p>
    <p>
      <FullScreenUrl
        id="full-screen-with-url"
        button="open full screen with url"
      >
        test with url
      </FullScreenUrl>
    </p>
  </>
);

export default FullScreenExample;
