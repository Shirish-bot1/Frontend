import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faEarthAsia } from '@fortawesome/free-solid-svg-icons'; 
import { NavLink } from 'react-router-dom';
import Mainft from './boxesft/Mainft';

function Homeft() {
  return (
    <>
    <div className="bg-cover bg-center bg-gray-900 w-full h-svh mt-1">
      <div className="flex justify-between items-center">
        <NavLink to="/humanright" className=' p-8 rounded-md px-15 py-5 my-10 mx-10 w-auto h-96 shadow-md transition duration-300 ease-in-out hover:bg-orange-400'>
          <FontAwesomeIcon icon={faEarthAsia} style={{color:'white'}} className=" text-3xl text-gray-600 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-4 ">Human rights</h2>
          <p className="text-gray-600 max-w-md">Human rights are fundamental rights and freedoms that belong to every person, regardless of their nationality, ethnicity, religion, or any other status. They are based on principles of dignity, equality, and respect for all individuals. Human rights encompass a wide range of rights, including civil, political, economic, social, and cultural rights.</p>
        </NavLink>
       
        
      </div>
    </div>
    <Mainft/>
    </>
  );
}

export default Homeft;