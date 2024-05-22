

import { NavLink } from 'react-router-dom'

function FNavbar() {

  
    


  return (
    <>
        <nav className=' flex items-center  w-full'>
      <ul className="flex items-center justify-between text-base text-white pt-4 md:pt-0">
        <li><NavLink to="/"  className= " font-bold text-black hover:text-gray-200  transition ease-in-out duration-300  px-4 py-2 block">Home</NavLink></li>
        <li
         

        ><NavLink to="/books" className="font-bold text-black px-4 py-2 block transition duration-300 ease-in-out hover:text-gray-200 hover:drop-shadow-sm">
    Knowledge
  </NavLink>
      
  
  
       </li>
        <li>
        <NavLink to="/Onlinecom"  className=" font-bold text-black transition duration-300 hover:text-gray-200">Online complaint</NavLink>
        </li>
        
        <li><NavLink to="/login"  className="font-bold text-black transition duration-300 hover:text-gray-200 px-4 py-2 block ">Log in</NavLink></li>
     
      </ul>
    </nav>
    </>
  )
}

export default FNavbar