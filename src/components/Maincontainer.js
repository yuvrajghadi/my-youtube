import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Maincontainer = () => {
  return (
    <div className='md:w-[85%] w-full mt-20 '>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default Maincontainer
