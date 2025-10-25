
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='flex justify-center '>
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default Body
