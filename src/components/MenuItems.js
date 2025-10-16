

const MenuItems = () => {
  return (
    <div className="hidden md:flex flex-col w-60 bg-white text-gray-800 h-screen p-2 border-r border-gray-300 sticky top-0 overflow-y-auto">
      {/* --- TOP MENU --- */}
      <div className="space-y-1">
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🏠</span>
          <span className="text-sm font-medium">Home</span>
        </div>
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🔥</span>
          <span className="text-sm font-medium">Trending</span>
        </div>
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🎥</span>
          <span className="text-sm font-medium">Subscriptions</span>
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      {/* --- LIBRARY SECTION --- */}
      <div className="space-y-1">
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">📚</span>
          <span className="text-sm font-medium">Library</span>
        </div>
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">⏰</span>
          <span className="text-sm font-medium">History</span>
        </div>
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">💾</span>
          <span className="text-sm font-medium">Your Videos</span>
        </div>
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">👍</span>
          <span className="text-sm font-medium">Liked Videos</span>
        </div>
        <div className="flex items-center space-x-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🕓</span>
          <span className="text-sm font-medium">Watch Later</span>
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      {/* --- SUBSCRIPTIONS --- */}
      <h2 className="text-gray-500 text-xs uppercase px-3 mt-2 mb-1">Subscriptions</h2>
      <div className="space-y-1">
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">👨‍💻</span>
          <span className="text-sm font-medium">Tech Channel</span>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🎮</span>
          <span className="text-sm font-medium">Gaming Hub</span>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🎵</span>
          <span className="text-sm font-medium">Music Beats</span>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🍳</span>
          <span className="text-sm font-medium">Cooking Tips</span>
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      {/* --- MORE FROM YOUTUBE --- */}
      <h2 className="text-gray-500 text-xs uppercase px-3 mt-2 mb-1">
        More from YouTube
      </h2>
      <div className="space-y-1">
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">💎</span>
          <span className="text-sm font-medium">YouTube Premium</span>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🎮</span>
          <span className="text-sm font-medium">Gaming</span>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">🎥</span>
          <span className="text-sm font-medium">Movies</span>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <span className="text-xl">📰</span>
          <span className="text-sm font-medium">News</span>
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      {/* --- FOOTER --- */}
      <div className="text-xs text-gray-500 px-3 py-2 space-y-1">
        <p>About · Press · Copyright</p>
        <p>Contact · Creator · Advertise</p>
        <p>Terms · Privacy · Policy</p>
        <p className="mt-2 text-gray-400">© 2025 YouTube Clone</p>
      </div>
    </div>
  );
};

export default MenuItems;
