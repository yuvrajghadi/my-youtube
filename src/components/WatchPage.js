import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const [searchParams]=useSearchParams()
    console.log(searchParams.get("v"))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeMenu());
  }, []);

  return (
    <div className="w-screen md:w-[85%] mt-12 md:mt-24 md:m-5 md:h-screen">
      <iframe
       
        className="h-[300px] w-full  md:w-3/4 md:h-2/3 md:rounded-2xl"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
