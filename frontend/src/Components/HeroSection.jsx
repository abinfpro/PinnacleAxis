import React from 'react';
import { useNavigate } from 'react-router-dom';

const ACCENT_ORANGE = "#EA4D33";

const HeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  description, 
  showButton = true,
  buttonText = "Contact Us",
  buttonLink = "/contact",
  logoImage,
  logoAlt = "Pinnacle Axis Logo"
}) => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 text-white w-full max-w-6xl px-4 sm:px-8 text-center lg:text-left">
          {/* Logo */}
          {logoImage && (
            <div className="w-[200px] sm:w-[300px] lg:w-[400px] xl:w-[500px] h-[60px] sm:h-[80px] lg:h-[100px] xl:h-[106px] flex-shrink-0">
              <img
                className="w-auto h-full bg-transparent"
                src={logoImage}
                alt={logoAlt}
              />
            </div>
          )}
          
          {/* Text Content */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-semibold tracking-wider">
              {title}
            </h1>
            
            {subtitle && (
              <p className="font-normal leading-[24px] sm:leading-[28px] text-[18px] sm:text-[20px] lg:text-[22px] text-center lg:text-start">
                {subtitle}
              </p>
            )}
            
            {description && (
              <p className="font-normal leading-[24px] sm:leading-[28px] text-[18px] sm:text-[20px] lg:text-[22px] text-center lg:text-start">
                {description}
              </p>
            )}

            {/* Button */}
            {showButton && (
              <div className="flex items-center mt-4">
                <button 
                  onClick={() => navigate(buttonLink)}
                  style={{ borderColor: ACCENT_ORANGE }}
                  className="px-4 py-2 backdrop-blur text-[16px] sm:text-[18px] lg:text-[19px] font-normal border-3 hover:bg-white hover:bg-opacity-10 transition"
                >
                  {buttonText}
                </button>
                <div 
                  style={{ 
                    backgroundColor: ACCENT_ORANGE, 
                    width: "40px", 
                    height: "40px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}
                  className="sm:w-[45px] sm:h-[45px] lg:w-[49.5px] lg:h-[49.5px]"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform -rotate-360"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#fff" }}
                  >
                    <line x1="1" y1="22" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

