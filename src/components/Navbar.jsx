import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success('Logged out successfully');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar w-full flex justify-end gap-10 items-center py-3 px-6'>
      {/* Links */}
      <ul className='flex items-center justify-center gap-5'>{links}</ul>

      {/* User Info & Button */}
      <div className='flex items-center gap-6'>
        {user ? (
          <>
            {/* User photo or default icon */}
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt='user'
                className='w-10 h-10 rounded-full border border-gray-400'
              />
            ) : (
              <FaUserCircle className='text-4xl text-gray-600' />
            )}

            {/* Display Name (optional) */}
            {user.displayName && (
              <span className='font-semibold text-gray-700'>{user.displayName}</span>
            )}

            {/* Logout Button */}
            <button onClick={handleLogout} className='btn btn-neutral'>
              Logout
            </button>
          </>
        ) : (
          <Link to='/auth/login'>
            <button className='btn btn-neutral'>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
