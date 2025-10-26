
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='flex justify-center bg-black'>
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default Body
