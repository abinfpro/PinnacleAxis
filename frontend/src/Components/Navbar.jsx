import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define a placeholder for your accent color
const ACCENT_ORANGE = '#EA4D33';

const Navbar = () => {
    // State to manage the dropdown visibility and mobile menu
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to close both menus when a link is clicked
    const closeMenus = () => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }

    const style = `
@keyframes dropdown {
  0% {
    opacity: 0;
    transform: translate(-50%, -10px); /* Start slightly above */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0); /* Settle in place */
  }
}

.animate-dropdown {
  animation: dropdown 0.25s ease-out forwards;
}
  @keyframes dropdown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

`

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex justify-between h-[61px] items-center px-4 sm:px-8 lg:px-[0px]">
                <style>{style}</style>
                {/* Logo */}
                <div className="relative flex items-center space-x-2">
                    <img
                        src="/Group 4.webp"
                        alt="Pinnacle Axis Logo"
                        className="h-6 sm:h-8 md:h-10"
                    />
                    <a className='absolute w-full h-full' href="/"></a>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:block">
                    <nav className="flex space-x-6 xl:space-x-8 text-sm font-medium">
                        <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/" onClick={() => { window.scrollY() }}>Home</Link>
                        <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/about" onClick={() => { window.scrollY() }} >About Us</Link>

                        {/* Services Dropdown - DESKTOP (uses hover) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <Link
                                className={`nav-link text-[16px] xl:text-[18px] font-medium flex items-center`}
                                to="/service?service=machining"
                                onClick={() => { setIsServicesOpen(false), window.scrollY() }}
                            >
                                Services
                                {/* Dropdown Arrow Icon */}
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </Link>

                            {/* Dropdown Content */}
                            {isServicesOpen && (
                                <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <Link to="/service?service=machining" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => { setIsServicesOpen(false); window.scrollY() }}>
                                        Machining
                                    </Link>
                                    <Link to="/service?service=Fabrication" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => { setIsServicesOpen(false); window.scrollY() }}>
                                        Steel Fabrication
                                    </Link>
                                    <Link to="/service?service=Rubber" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => { setIsServicesOpen(false); window.scrollY() }}>
                                        Rubber and PU
                                    </Link>
                                    <Link to="/service?service=Laser" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => { setIsServicesOpen(false); window.scrollY() }}>
                                        Laser and CNC
                                    </Link>
                                    <Link to="/service?service=Cutting" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => { setIsServicesOpen(false); window.scrollY() }}>
                                        Cutting, Bending & Rolling
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/contact" onClick={() => { window.scrollY() }}>Contact Us</Link>
                    </nav>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Mobile Menu Icon */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100"
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            setIsServicesOpen(false);
                        }}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    {/* Get in Touch Button */}
                    <a
                        href="/contact"
                        className="hidden md:hidden lg:block sm:inline-flex items-center justify-center py-[15px] px-4 sm:w-[160px] lg:w-[180px] border border-transparent text-[16px] sm:text-[18px] lg:text-[20px] font-medium rounded-none shadow-xl text-white transition duration-150"
                        style={{ backgroundColor: ACCENT_ORANGE }}
                    //  onClick={()=>{closeMenus();window.scrollY()}}
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
                    <nav className="px-4 text-center py-4 space-y-4">
                        <Link
                            className="block text-[18px] py-1 m-0 font-medium text-gray-800 hover:text-[#EA4D33] transition"
                            to="/"
                            onClick={() => { closeMenus(); window.scrollY() }}
                        >
                            Home
                        </Link>
                        <Link
                            className="block text-[18px] py-1 m-0 font-medium text-gray-800 hover:text-[#EA4D33] transition"
                            to="/about"
                            onClick={() => { closeMenus(); window.scrollY() }}
                        >
                            About Us
                        </Link>

                        {/* Services Dropdown - MOBILE (uses click/tap) */}
                        <div className="relative mb-0 flex flex-col items-center">
                            {/* Dropdown Trigger */}
                            <div className="relative mb-0 flex flex-col items-center">
  {/* Dropdown Trigger */}
  <div
    className="text-[18px] py-1 font-medium flex items-center cursor-pointer text-gray-800 hover:text-[#EA4D33] transition"
    onClick={(e) => {
      e.preventDefault(); // prevent default only if needed
      setIsServicesOpen(!isServicesOpen); // toggle dropdown
    }}
  >
    {/* Services text */}
    <span
      className="hover:text-[#EA4D33]"
    >
      Services
    </span>

    {/* Arrow icon */}
    <svg
      className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {/* Dropdown menu */}
  {isServicesOpen && (
    <div className="mt-2 flex flex-col items-start bg-white shadow-md rounded-md w-full">
    </div>
  )}
</div>
                            {/* Super Dropdown */}
                            {isServicesOpen && (
                                <div
                                    className=" absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[90vw] md:w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-6 animate-dropdown z-50">
                                    <Link
                                        to="/service?service=machining"
                                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 text-[15px] font-medium transition"
                                        onClick={() => { closeMenus(); window.scrollTo(0, 0); }}
                                    >
                                        Machining
                                    </Link>

                                    <Link
                                        to="/service?service=Fabrication"
                                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 text-[15px] font-medium transition"
                                        onClick={() => { closeMenus(); window.scrollTo(0, 0); }}
                                    >
                                        Steel Fabrication
                                    </Link>

                                    <Link
                                        to="/service?service=Rubber"
                                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 text-[15px] font-medium transition"
                                        onClick={() => { closeMenus(); window.scrollTo(0, 0); }}
                                    >
                                        Rubber and PU
                                    </Link>

                                    <Link
                                        to="/service?service=Laser"
                                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 text-[15px] font-medium transition"
                                        onClick={() => { closeMenus(); window.scrollTo(0, 0); }}
                                    >
                                        Laser and CNC
                                    </Link>

                                    <Link
                                        to="/service?service=Cutting"
                                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-800 text-[15px] font-medium transition"
                                        onClick={() => { closeMenus(); window.scrollTo(0, 0); }}
                                    >
                                        Cutting, Bending & Rolling
                                    </Link>
                                </div>
                            )}
                        </div>


                        <Link
                            className="block text-[18px] py-1 font-medium text-gray-800 hover:text-[#EA4D33] transition"
                            to="/contact"
                            onClick={() => { closeMenus(); window.scrollY() }}
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;