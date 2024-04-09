import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoCard from "./Card";

const Youtube = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeAdrlHWZEghTa8Cc0TDDnGnJL5X8_H6A&part=snippet&type=video&q=music"
      );
      setvideos(response.data.items);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto w-75">
      <center className="my-5">
        <h1>Youtube Videos</h1>
      </center>
      <ul className="d-flex flex-wrap gap-4 mx-5">
        {videos.map((value) => (
          <VideoCard key={value.id.videoId} data={value} />
        ))}
      </ul>
    </div>
  );
};

export default Youtube;
