import React, { useState, useEffect } from 'react';
import EVLOGO from '../../assets/evlogo192.png';

import { NavbarItems } from '../../resources/NavbarItems';

import { NavLink, Link } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.querySelector('html').classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <header className='h-16 flex items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-none '>
        <nav className='flex justify-between items-center w-[92%]  mx-auto h-10'>
          <div className='h-full'>
            <Link to={'./'}>
              <img
                className=' cursor-pointer h-full w-auto'
                src={EVLOGO}
                alt='...'
              />
            </Link>
          </div>
          <div className='hidden md:flex'>
            <ul className='flex gap-4'>
              {NavbarItems.map((navbarItem) => {
                return (
                  <li key={navbarItem.name}>
                    <NavLink
                      to={navbarItem.path}
                      className='dark:hover:text-[#FF6E30] font-GraphikLight capitalize text-black dark:text-white'>
                      {navbarItem.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            className='hidden md:block border-2 bg-black dark:bg-white text-white dark:text-black p-1 rounded-md font-GraphikExtraLight text-sm'
            onClick={handleChangeTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          <div className='flex items-center gap-6 h-full md:hidden'>
            <button
              onClick={() => setVisible(!visible)}
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:text-gray'
              aria-controls='mobile-menu'
              aria-expanded='false'>
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>

              <IoMenu
                className={`${visible ? 'block' : 'hidden'} h-full w-auto`}>
                open
              </IoMenu>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`${
          !visible ? 'flex flex-col' : 'hidden'
        } md:hidden w-full  h-[40%] left-0 fixed absolute z-10`}>
        <ul className='flex flex-col gap-[2rem] items-center justify-center h-full bg-gray-100 dark:bg-gray-800 text-white'>
          <button
            onClick={() => setVisible(!visible)}
            type='button'
            className='absolute top-4 right-4 rounded-md p-2 text-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:text-gray'
            aria-controls='mobile-menu'
            aria-expanded='false'>
            <span className='absolute -inset-0.5'></span>
            <span className='sr-only'>Open main menu</span>

            <IoClose
              className={`${!visible ? 'block' : 'hidden'} h-full w-auto`}>
              open
            </IoClose>
          </button>

          {NavbarItems.map((navbarItem) => {
            return (
              <li key={navbarItem.name}>
                <NavLink
                  onClick={() => setVisible(!visible)}
                  to={navbarItem.path}
                  className='text-black dark:text-white font-GraphikLight capitalize'>
                  {navbarItem.name}
                </NavLink>
              </li>
            );
          })}
          <div className=' flex gap-2 bg-[#FF6E30] rounded-md px-2 py-2'>
            <button
              className='font-GraphikExtraLight text-sm'
              onClick={handleChangeTheme}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
