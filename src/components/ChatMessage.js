import React from 'react'

const ChatMessage = ({name, message}) => {

  
  return (
    <div className='flex items-center '>
       <img
          className="w-5 md:w-8 cursor-pointer"
          src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-1024.png"
          alt="user"
        />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>

    </div>
  )
}

export default ChatMessage