import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import generateRandomName, { generateRandomChat } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomChat(),
        })
      );
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      {" "}
      <div className=" ml-3 p-2 h-[500px] w-full border-2 border-black overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "User",
              message: inputMessage,
            })
          );
          setInputMessage("");
        }}
      >
        <input
          type="text"
          className="w-full ml-3 my-1 border-2 border-black p-2"
          placeholder="Type your message here..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button className="ml-3 mt-1 p-1 bg-green-500 text-white font-bold border-2 border-black ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
