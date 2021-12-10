/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../src/usePage";

import YouTubeRWD from "../organisms/YouTubeRWD.example";
import youTubeRWD from "!raw-loader!../../../../ui/organisms/YouTubeRWD.example";

import QQVideo from "../organisms/QQVideo.example";
import qQVideo from "!raw-loader!../../../../ui/organisms/QQVideo.example";

const Video = (props) => {
  usePage({ ...props, pageName: "Video" });
  return (
    <>
      <CodeExample code={youTubeRWD} header="YouTube RWD player">
        <YouTubeRWD />
      </CodeExample>

      <CodeExample code={qQVideo} header="v.qq.com player">
        <QQVideo />
      </CodeExample>
    </>
  );
};

export default Video;
