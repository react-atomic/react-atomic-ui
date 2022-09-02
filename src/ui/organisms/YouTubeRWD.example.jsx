import { useState } from "react";
import { YoutubeRWD } from "organism-react-video";
import { Checkbox } from "react-atomic-organism";

const YouTubeRWDExample = () => {
  const [controls, setControls] = useState();
  const handleControls = (e) => setControls(e.checked ? 1 : 0);
  return (
    <>
      <Checkbox label="Enable controls" toggle onChange={handleControls} checked={controls} />
      <YoutubeRWD videoId="CjxugyZCfuw" videoParams={{ controls }} mask={false} showControllBar={controls} />
    </>
  );
};

export default YouTubeRWDExample;
