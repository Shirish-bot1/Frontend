
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate} from '@fortawesome/free-solid-svg-icons';
import Homeft from '../footer/Homeft';
import FNavbar from './FNavbar';




const Navbar = () => {




  return (
    <>
   
     <div className=' bg-[url("images/image2.jpg")] bg-cover bg-center h-screen flex items-start   '>
   <header className=" text-white">
    
<div className="container mx-auto py-4 px-4">
  <div className="flex justify-between items-center">
 
    <a href="#" className="text-xl font-bold  mr-96">Logo</a>
   
   <FNavbar/>  
    <div className=' flex items-end gap-2 '>
    
      <NavLink to="/Donation" className="flex items-center font-bold w-44 text-black transition duration-300 border rounded-full hover:text-gray-200 hover:bg-gray-200 px-4 py-2">
        <FontAwesomeIcon icon={faDonate} className="text-white mr-2" />
        <button className='bg-transparent focus:outline-none'>Donate</button> 
       
      </NavLink>
      </div>
  </div>
</div>

</header>
    </div>
    <Homeft/>

  
    </>
    
  
  
  );
}

export default Navbar;
