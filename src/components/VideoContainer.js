import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div
      className=" flex flex-wrap justify-center w-full p-0 m-0 md:w-[100%]  gap-7 
                 overflow-y-auto h-screen pt-6
                 scrollbar-hide"
    >
      {videos.map((video) => (
        <Link  key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
