import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSideBarClick = () => {
    dispatch(toggleMenu());
  };

  return (
    
    <div
      className=" flex justify-between items-center shadow-md 
                fixed top-0 left-0 right-0 z-50 
                bg-white/30 backdrop-blur-md border-b border-white/20"
    >
      <div className="flex justify-center items-center w-2/12">
        <img
          className="hidden sm:block md:w-16 cursor-pointer"
          src="https://as1.ftcdn.net/jpg/04/55/74/96/1000_F_455749623_AfzZxNZFd2x8QphKiKPEehdvgLL2XUHe.jpg"
          alt="menu"
          onClick={handleSideBarClick}
        />
        <a href= "/">
        <img
          className="ml-2 md:h-20 w-40 cursor-pointer"
          src="	https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-650-80.jpg.webp
"
          alt="Logo"
        />
        </a>
      </div>
      <div className="flex  w-8/12">
        <input
          type="text"
          placeholder="Search"
          className="ml-6 flex md:w-1/2 md:ml-52 py-2 px-2 rounded-l-full border border-gray-300   focus:outline-none bg-white/30 backdrop-blur- border-b border-gray "
        />
        <button
          type="submit"
          className="bg-gray-200 hover:bg-gray-300 border border-gray-300 text-white px-4 py-2 rounded-r-full flex items-center justify-center"
        >
          🔍
        </button>
      </div>
      <div className="flex justify-end mr-2 items-center w-2/12">
        <img
          className="w-5 md:w-10 cursor-pointer"
          src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-1024.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
