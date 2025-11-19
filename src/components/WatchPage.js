import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeMenu());
  }, []);

  return (
    <div className="w-full flex flex-col m-5 md:mt-24">
      <div className="flex justify-normal">
      {/* VIDEO SECTION */}
      <div className="w-full md:w-[70%] ">
        <iframe
          className="h-[300px] w-full md:w-full md:h-[500px] md:rounded-2xl"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-[30%]">
        <LiveChat/>
      </div>
      </div>

      {/* COMMENTS SECTION */}
      <div className="w-full md:w-[85%]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
