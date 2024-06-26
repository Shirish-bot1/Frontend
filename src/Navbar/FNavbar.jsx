import { NavLink } from 'react-router-dom';

function FNavbar() {
  return (
    <nav className='flex items-center w-full'>
      <ul className="flex items-center justify-between text-base text-white pt-4 md:pt-0">
        <li>
          <NavLink
            to="/"
            className="font-bold text-gray-200 hover:text-black transition ease-in-out duration-300 px-4 py-2 block"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="font-bold text-gray-200 hover:text-black transition ease-in-out duration-300 px-4 py-2 block hover:drop-shadow-sm"
          >
            Knowledge
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Onlinecom"
            className="font-bold text-gray-200 hover:text-black transition ease-in-out duration-300 px-4 py-2 block"
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="font-bold text-gray-200 hover:text-black transition ease-in-out duration-300 px-4 py-2 block"
          >
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="font-bold text-gray-200 hover:text-black transition ease-in-out duration-300 px-4 py-2 block"
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FNavbar;
