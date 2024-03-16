import React from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const link = searchParams.get("id");

  if (!link) {
    return (
      <div>
        <p>No video ID provided</p>
      </div>
    );
  }

  return (
    <div>
      <ReactPlayer url={"https://www.youtube.com/watch?v=" + link} />
    </div>
  );
};

export default WatchVideo;
