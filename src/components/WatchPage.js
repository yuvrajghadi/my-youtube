import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeMenu());
  }, []);

  return (
    <div className="w-full flex flex-col m-5 md:mt-24">
      
      {/* VIDEO SECTION */}
      <div className="w-full md:w-[85%] ">
        <iframe
          className="h-[300px] w-full md:w-3/4 md:h-[450px] md:rounded-2xl"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* COMMENTS SECTION */}
      <div className="w-full md:w-[85%]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
