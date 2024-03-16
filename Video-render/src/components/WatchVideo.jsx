import React from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  //   const params = new URLSearchParams(window.location.search);
  //   const link = params.get("id");

  const [searchParams] = useSearchParams();
  const link = searchParams.get("id");
  return (
    <div>
      <ReactPlayer url={"https://www.youtube.com/watch?v=" + link} />
    </div>
  );
};

export default WatchVideo;

{
  /* <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + link + "?si=xcTLSNuaurdxAbxy"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */
}
