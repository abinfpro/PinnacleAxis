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
              Product
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Fabrication
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h5 className="font-medium text-[18px] sm:text-[22px] mb-4">
              Company
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h5 className="font-medium text-[18px] sm:text-[22px] mb-4">
              Resources
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[16px] sm:text-[20px] font-normal transition">
                  Support
                </a>
              </li>
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
