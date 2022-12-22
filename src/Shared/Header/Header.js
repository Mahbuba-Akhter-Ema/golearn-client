import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 z-50 relative">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img className="w-8 rounded-full h-8 text-purple-400" src={logo} alt="" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">
              golearn
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/courses"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <label className="swap swap-rotate">

                {/* <!-- this hidden checkbox controls the state --> */}
                <input type="checkbox" />

                {/* <!-- sun icon --> */}
                <svg className=" text-white swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* <!-- moon icon --> */}
                <svg className="text-black swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

              </label>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">

            <li className='text-white'>
              {
                user?.uid ?
                  <>

                    <button onClick={handleLogOut} className="inline-flex items-center justify-center px-6 mx-2 h-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none">Log out</button>
                    <span>{user?.displayName}</span>
                  </>
                  :
                  <>
                    <button to="/login" className="inline-flex items-center justify-center px-6 mx-2 h-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none"><Link to='/login'>Log In</Link></button>
                  </>
              }
            </li>
            <li>
              <Link
                to="/"
                aria-label="Name"
                title={user?.displayName}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                {user?.photoURL ?
                  <img
                    className="rounded-full h-10 w-10"
                    src={user?.photoURL}
                    alt="" />
                  : <FaUser className="white text-2xl"></FaUser>
                }
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img className="w-8 rounded-full h-8 text-purple-400" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          golearn
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faqs"
                          aria-label="FAQ"
                          title="FAQ"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                          FAQ's
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <label className="swap swap-rotate">

                          <input type="checkbox" />

                          <svg className="text-white swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                          <svg className=" text-white swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                      </li>
                      <li className='text-white'>

                        {
                          user?.uid ?
                            <>

                              <button onClick={handleLogOut} className="inline-flex items-center justify-center px-6 mx-24 lg:mx-0  h-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none">Log out</button>
                              <span>{user?.displayName}</span>
                            </>
                            :
                            <>
                              <button className="inline-flex items-center justify-center px-6 mx-2 h-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none"><Link to='/login'>Log In</Link></button>
                            </>
                        }

                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="Name"
                          title={user?.displayName}
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                        >
                          {user?.photoURL ?
                            <img
                              className="inline rounded-full h-10 w-10 sm:mx-10"
                              src={user?.photoURL}
                              alt="" />
                            : <FaUser className="mx-auto text-black text-2xl flex justify-center items-center"></FaUser>
                          }
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;