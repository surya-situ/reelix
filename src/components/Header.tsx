import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo  from "../assets/reelix.gif";

const Header: React.FC = () => {

  const[ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);

  const handleMenuChange = (): void => {
    setIsMenuOpen(!isMenuOpen)
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="h-20 md:h-24 w-full flex justify-between items-center px-6 md:px-16 lg:px-24 md:fixed bg-zinc-800">
        <nav className="flex flex-row items-center gap-4 cursor-pointer">
          <img src={logo} alt="reelix logo" className="w-auto h-12 md:h-14 lg:h-16 rounded-2xl"/>
          <span className="text-xl md:text-2xl lg:text-3xl hover:text-customOrange">Reelix</span>
        </nav>

        <nav>
          <ul className="hidden list-none md:flex flex-row items-center gap-6">
            <li 
              className="font-semibold text-customOrange hover:text-white hover:border-customOrange border-zinc-600 border-4  px-3 py-2 lg:px-6 lg:py-3 rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 ease-out tracking-wider focus:outline-none"
            >
              reelix duel
            </li>

            <li className='font-semibold cursor-pointer hover:text-customOrange'>
              Home
            </li>

            <li className='font-semibold cursor-pointer hover:text-customOrange'>
              Videos
            </li>

            <li>
              <div className="w-auto flex flex-row items-center bg-zinc-950 rounded-2xl" role='search'>
                <input 
                  type="text"
                  className="px-4 py-4 outline-none w-60 bg-zinc-950 border-r-2 border-[#ff62006f] rounded-l-2xl"
                  placeholder="Search"
                />
                <button className="px-3 bg-zinc-950 text-customOrange cursor-pointer">
                  <SearchIcon sx={{ color: "#ff6100", backgroundColor: "#09090b" }}/>
                </button>
              </div>
            </li>

            <li className='cursor-pointer'>
              <AccountCircleIcon sx={{ fontSize: 36 }} />
            </li>
          </ul>
        </nav>

        <button onClick={handleMenuChange} className='md:hidden'>
          {
            !isMenuOpen ? <MenuIcon /> : <CloseIcon />
          }
        </button>

        <nav 
          className={`fixed top-20 left-0 h-full bg-zinc-800 p-6 ease-in-out duration-700 transition-transform shadow-[_10px_20px_30px_2px_rgba(255,97,0,0.1)] ${
            isMenuOpen ? 'w-[70%] translate-x-0' : 'w-0 left-[-100px] -translate-x-full'
          }`}
        >
        {isMenuOpen && (
          <ul className="flex flex-col gap-6 py-10">
            <li className="font-semibold px-4 hover:text-customOrange">Home</li>
            <li className="font-semibold px-4 hover:text-customOrange">Videos</li>
            <li className="font-semibold px-4 hover:text-customOrange">Profile</li>
            <li className="font-semibold w-[120px] border-2 border-customOrange rounded-2xl px-4 py-2 hover:border-white hover:text-[#ff6100]">reelix duel</li>
          </ul>
        )}
        </nav>
      </header>
  )
}

export default Header;