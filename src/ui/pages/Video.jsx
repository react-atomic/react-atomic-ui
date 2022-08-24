/*Base*/
import CodeExample from "organism-react-code";
import usePage from "../../usePage";

import YouTubeRWD from "../organisms/YouTubeRWD.example";
import youTubeRWD from "../../../../../src/ui/organisms/YouTubeRWD.example.jsx?raw";

import QQVideo from "../organisms/QQVideo.example";
import qqVideo from "../../../../../src/ui/organisms/QQVideo.example.jsx?raw";

const Video = (props) => {
  usePage({ ...props, pageName: "Video" });
  return (
    <>
      <CodeExample code={youTubeRWD} header="YouTube RWD player">
        <YouTubeRWD />
      </CodeExample>

      <CodeExample code={qqVideo} header="v.qq.com player">
        <QQVideo />
      </CodeExample>
    </>
  );
};

export default Video;
