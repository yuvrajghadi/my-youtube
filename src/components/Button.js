import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex">
    
      <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 ml-1 rounded-lg text-sm whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
