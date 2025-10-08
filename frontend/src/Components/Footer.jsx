import React from 'react';

const ACCENT_ORANGE = "#EA4D33";
const PRIMARY_DARK = "#131C23";

const Footer = ({tag}) => {
  return (
    <footer
      className={`text-white w-full lg:pt-60 pt-10`}
      style={{ backgroundColor: PRIMARY_DARK }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Footer Logo/Mission */}
          <div className="col-span-2 md:col-span-2">
            <img
              src="public/heroIcon.png"
              alt="Pinnacle Axis Logo"
              className="h-8 sm:h-10 mb-4 filter brightness-150"
            />
            <p className="font-medium text-[11px] sm:text-[13px] max-w-xs">
              Together We Grow. <br /> Delivering trusted industrial services with precision and care.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="font-medium text-[18px] sm:text-[22px] mb-4">
              Explore
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h5 className="font-medium text-[18px] sm:text-[22px] mb-4">
              Services
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/service?service=machining" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Machining 
                </a>
              </li>
              <li>
                <a href="/service?service=Fabrication" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Steel Fabrication
                </a>
              </li>
              <li>
                <a href="/service?service=Rubber" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Rubber and PU
                </a>
              </li>
              <li>
                <a href="/service?service=Laser" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Laser and CNC
                </a>
              </li>
              <li>
                <a href="/service?service=Cutting" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Cutting, Bending & Rolling
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h5 className="font-medium text-[18px] sm:text-[22px] mb-4">
              More Details
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+966 556207221" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Tel: +966 556207221
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                info@pinnaxsa.com
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                DPA
                 </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                Terms of service
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          &copy; 2024 Pinnacle Axis. All rights reserved. |{" "}
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
