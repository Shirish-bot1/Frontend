import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import Homeft from '../footer/Homeft';
import FNavbar from './FNavbar';
import { useGetHomePhotos } from '../api/homepageapi/useUpdateHomePhoto';

const Navbar = () => {
  const { data: photos, isError: imageError, isLoading: imageLoading } = useGetHomePhotos();

  if (imageLoading) {
    return <div>Loading...</div>;
  }

  if (imageError) {
    return <div>Error fetching images</div>;
  }

  const photo = photos && photos.length > 0 ? photos[0] : null;
  const backgroundImage = photo ? `url(http://localhost:5000${photo.url})` : 'default-image-url.jpg'; // Replace 'default-image-url.jpg' with your fallback image URL

  return (
    <>
      <div className='bg-cover bg-center h-screen flex flex-col justify-between' style={{ backgroundImage }}>
        <header className="text-white bg-gradient-to-b from-black to-transparent">
          <div className="container mx-auto py-4 px-6 flex justify-between items-center">
            <div className="flex flex-col mr-4">
              <span className="text-2xl font-bold tracking-wide">Human Rights Organization</span>
             
            </div>
            <FNavbar />
            <NavLink to="/Donation" className="flex items-center font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300 px-4 py-2">
              <FontAwesomeIcon icon={faDonate} className="mr-2" />
              <span>Donate</span>
            </NavLink>
          </div>
        </header>
        <div className="container mx-auto my-auto text-center">
          <h1 className="text-5xl font-bold text-white">Welcome to Our Platform</h1>
          <p className="text-xl text-gray-200 mt-4">Your support makes a difference</p>
        </div>
      </div>
      <Homeft />
    </>
  );
}

export default Navbar;
