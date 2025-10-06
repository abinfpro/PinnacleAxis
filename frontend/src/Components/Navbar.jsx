// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Define a placeholder for your accent color
// const ACCENT_ORANGE = '#EA4D33';

// const Navbar = () => {
//     // State to manage the dropdown visibility and mobile menu
//     const [isServicesOpen, setIsServicesOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-50 bg-white shadow-md">
//             <div className="flex justify-between h-[61px] items-center px-4 sm:px-8 lg:px-[0px]">
//                 {/* Logo */}
//                 <div className="relative flex items-center space-x-2">
//                     <img
//                         src="public/Group 4.png"
//                         alt="Pinnacle Axis Logo"
//                         className="h-6 sm:h-8 md:h-10"
//                     />
//                     <a className='absolute w-full h-full' href="/"></a>
//                 </div>

//                 {/* Desktop Nav Links */}
//                 <div className="hidden lg:block">
//                     <nav className="flex space-x-6 xl:space-x-8 text-sm font-medium">
//                         <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/">Home</Link>
//                         <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/about">About Us</Link>

//                         {/* Services Dropdown */}
//                         <div
//                             className="relative"
//                             onMouseEnter={() => setIsServicesOpen(true)}
//                             onMouseLeave={() => setIsServicesOpen(false)}
//                         >
//                             <Link
//                                 className={`nav-link text-[16px] xl:text-[18px] font-medium flex items-center`}
//                                 to="/service?service=machining"
//                                 onClick={() => setIsServicesOpen(false)}
//                             >
//                                 Services
//                                 {/* Dropdown Arrow Icon */}
//                                 <svg
//                                     className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`}
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     ></path>
//                                 </svg>
//                             </Link>

//                             {/* Dropdown Content */}
//                             {isServicesOpen && (
//                                 <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                                     <Link to="/service?service=machining" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Machining Division
//                                     </Link>
//                                     <Link to="/service?service=Fabrication" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Steel Fabrication Division
//                                     </Link>
//                                     <Link to="/service?service=Rubber" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Rubber and PU Division
//                                     </Link>
//                                     <Link to="/service?service=Laser" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Laser and CNC                                    </Link>
//                                     <Link to="/service?service=Cutting" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Cutting, Bending & Rolling
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>
                        
//                         <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/contact">Contact Us</Link>
//                     </nav>
//                 </div>
            
//                 <div className="flex items-center space-x-2 sm:space-x-4">
//                     {/* Mobile Menu Icon */}
//                     <button 
//                         className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100"
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     >
//                         <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h16m-7 6h7"
//                             ></path>
//                         </svg>
//                     </button>

//                     {/* Get in Touch Button */}
//                     <a
//                         href="#contact"
//                         className="hidden md:hidden lg:block sm:inline-flex items-center justify-center py-[12px] sm:py-[15px] px-4 sm:w-[160px] lg:w-[180px] border border-transparent text-[16px] sm:text-[18px] lg:text-[20px] font-medium rounded-none shadow-sm text-white transition duration-150"
//                         style={{ backgroundColor: ACCENT_ORANGE }}
//                     >
//                         Get in Touch
//                     </a>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
//                     <nav className="px-4 text-center py-4 space-y-4">
//                         <Link 
//                             className="block text-[18px] font-medium text-gray-800 hover:text-[#EA4D33] transition" 
//                             to="/"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Home
//                         </Link>
//                         <Link 
//                             className="block text-[18px] font-medium text-gray-800 hover:text-[#EA4D33] transition" 
//                             to="/about"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             About Us
//                         </Link>
//                         <div
//                             className="relative flex justify-center mb-0"
//                             onMouseEnter={() => setIsServicesOpen(true)}
//                             onMouseLeave={() => setIsServicesOpen(false)}
//                         >
//                             <Link
//                                 className={`nav-link text-[16px] xl:text-[18px] font-medium flex items-center`}
//                                 to="/service?service=machining"
//                                 onClick={() => setIsServicesOpen(false)}
//                             >
//                                 Services
//                                 {/* Dropdown Arrow Icon */}
//                                 <svg
//                                     className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`}
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     ></path>
//                                 </svg>
//                             </Link>

//                             {/* Dropdown Content */}
//                             {isServicesOpen && (
//                                 <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                                     <Link to="/service?service=machining" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Machining Division
//                                     </Link>
//                                     <Link to="/service?service=Fabrication" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Steel Fabrication Division
//                                     </Link>
//                                     <Link to="/service?service=Rubber" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Rubber and PU Division
//                                     </Link>
//                                     <Link to="/service?service=Laser" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Laser and CNC                                    </Link>
//                                     <Link to="/service?service=Cutting" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
//                                     Cutting, Bending & Rolling
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>
                        
//                         <Link 
//                             className="block text-[18px] font-medium text-gray-800 hover:text-[#EA4D33] transition" 
//                             to="/contact"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact Us
//                         </Link>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Navbar;


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

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex justify-between h-[61px] items-center px-4 sm:px-8 lg:px-[0px]">
                {/* Logo */}
                <div className="relative flex items-center space-x-2">
                    <img
                        src="public/Group 4.png"
                        alt="Pinnacle Axis Logo"
                        className="h-6 sm:h-8 md:h-10"
                    />
                    <a className='absolute w-full h-full' href="/"></a>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:block">
                    <nav className="flex space-x-6 xl:space-x-8 text-sm font-medium">
                        <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/">Home</Link>
                        <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/about">About Us</Link>

                        {/* Services Dropdown - DESKTOP (uses hover) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <Link
                                className={`nav-link text-[16px] xl:text-[18px] font-medium flex items-center`}
                                to="/service?service=machining"
                                onClick={() => setIsServicesOpen(false)}
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
                                    <Link to="/service?service=machining" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
                                    Machining Division
                                    </Link>
                                    <Link to="/service?service=Fabrication" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
                                    Steel Fabrication Division
                                    </Link>
                                    <Link to="/service?service=Rubber" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
                                    Rubber and PU Division
                                    </Link>
                                    <Link to="/service?service=Laser" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
                                    Laser and CNC 
                                    </Link>
                                    <Link to="/service?service=Cutting" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={() => setIsServicesOpen(false)}>
                                    Cutting, Bending & Rolling
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        <Link className={`nav-link text-[16px] xl:text-[18px] font-medium`} to="/contact">Contact Us</Link>
                    </nav>
                </div>
            
                <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Mobile Menu Icon */}
                    <button 
                        className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100"
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            // Also close the services dropdown when opening/closing the mobile menu
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
                        href="#contact"
                        className="hidden md:hidden lg:block sm:inline-flex items-center justify-center py-[12px] sm:py-[15px] px-4 sm:w-[160px] lg:w-[180px] border border-transparent text-[16px] sm:text-[18px] lg:text-[20px] font-medium rounded-none shadow-sm text-white transition duration-150"
                        style={{ backgroundColor: ACCENT_ORANGE }}
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
                            className="block text-[18px] font-medium text-gray-800 hover:text-[#EA4D33] transition" 
                            to="/"
                            onClick={closeMenus}
                        >
                            Home
                        </Link>
                        <Link 
                            className="block text-[18px] font-medium text-gray-800 hover:text-[#EA4D33] transition" 
                            to="/about"
                            onClick={closeMenus}
                        >
                            About Us
                        </Link>
                        
                        {/* Services Dropdown - MOBILE (uses click/tap) */}
                        <div
                            className="relative flex flex-col items-center mb-0"
                            // Removed onMouseEnter/onMouseLeave for mobile
                        >
                            {/* Changed to button/div with onClick to toggle dropdown */}
                            <div
                                className={`text-[18px] font-medium flex items-center cursor-pointer text-gray-800 hover:text-[#EA4D33] transition`}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default link behavior
                                    setIsServicesOpen(!isServicesOpen);
                                }}
                            >
                                <Link 
                                    to="/service?service=machining" // Use Link for the navigation target
                                    onClick={closeMenus} // Close all on actual link click
                                    className='hover:text-[#EA4D33] transition'
                                >
                                    Services
                                </Link>
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
                            </div>

                            {/* Dropdown Content */}
                            {isServicesOpen && (
                                // Center the dropdown content on mobile
                                <div className="mt-2 w-full bg-white border-t border-gray-200 shadow-inner z-50">
                                    <Link to="/service?service=machining" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={closeMenus}>
                                    Machining Division
                                    </Link>
                                    <Link to="/service?service=Fabrication" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={closeMenus}>
                                    Steel Fabrication Division
                                    </Link>
                                    <Link to="/service?service=Rubber" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={closeMenus}>
                                    Rubber and PU Division
                                    </Link>
                                    <Link to="/service?service=Laser" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={closeMenus}>
                                    Laser and CNC 
                                    </Link>
                                    <Link to="/service?service=Cutting" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-[16px]" onClick={closeMenus}>
                                    Cutting, Bending & Rolling
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        <Link 
                            className="block text-[18px] font-medium text-gray-800 hover:text-[#EA4D33] transition" 
                            to="/contact"
                            onClick={closeMenus}
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