import React from "react";

const VideoCards = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-[340px] p-3 shadow-sm rounded-lg  bg-slate-50  m-2 cursor-pointer transition-transform hover:scale-[1.03]">
      <div className="relative">
        <img
          className="rounded-xl w-full h-[190px] object-cover"
          alt="thumbnail"
          src={thumbnails?.medium?.url}
        />
        {/* Optional: video duration overlay */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded-md">
          {info.contentDetails?.duration?.replace("PT", "").toLowerCase() || ""}
        </span>
      </div>

      <div className="flex mt-2">
        <div className="flex-shrink-0">
          <img
            src={`https://yt3.ggpht.com/ytc/${channelTitle}.jpg`}
            alt="channel"
            className="w-9 h-9 rounded-full bg-gray-300"
            onError={(e) => (e.target.style.display = "none")} // hide if not found
          />
        </div>

        <div className="ml-3">
          <h3 className="text-[15px] font-semibold line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{channelTitle}</p>
          <p className="text-sm text-gray-500">
            {Number(statistics?.viewCount).toLocaleString()} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
