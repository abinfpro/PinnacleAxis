import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import SectionWithImage from "../Components/SectionWithImage";
import CapabilityCard from "../Components/CapabilityCard";

const ACCENT_ORANGE = "#EA4D33";
const PRIMARY_DARK = "#131C23";

const Aboutpage = () => {
  const navigate = useNavigate();

  // Custom CSS for animations and styles
  const customStyles = `
    * {
      font-family: 'Inter Display';
    }
    
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 50vh;
      overflow: hidden;
    }
    
    @media (min-width: 640px) {
      .slider-wrapper {
        height: 60vh;
      }
    }
    
    @media (min-width: 1024px) {
      .slider-wrapper {
        height: 70vh;
      }
    }

    /* Navbar Link Hover/Active Effect */
    .nav-link {
      position: relative;
      padding-bottom: 5px;
      color: #6B7280;
      transition: color 0.15s ease;
    }

    .nav-link:hover, .nav-link.active {
      color: ${ACCENT_ORANGE};
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.15s ease;
    }

    .nav-link:hover::after, .nav-link.active::after {
      background-color: ${ACCENT_ORANGE};
    }
  `;

  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="relative bg-white text-gray-800 antialiased"
    >
      {/* Inject custom styles */}
      <style>{customStyles}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="slider-wrapper relative">
        <div>
          <img
            src="public/Rectangleabout.png"
            alt="About Us Background"
            className="w-full lg:h-full h-[200px] object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-opacity-50 flex justify-center sm:mt-16 lg:mt-25">
          <div className="flex gap-4 lg:gap-7  text-white w-full max-w-4xl px-4 sm:px-8 text-center">
            <div className="flex flex-col gap-4 lg:items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-semibold tracking-wider">
                About Us
              </h1>
              <p className="lg:font-normal leading-[18px] lg:leading-[28px] text-[18px] lg:text-[22px] text-center">
                At Pinnacle Axis, excellence is more than a promise, it's a way of working. 
                we take pride in transforming challenges into opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="hidden lg:block">
        <img className="absolute right-0 top-[300px] lg:top-[355px] z-3" src="public/Group2.svg" alt="" />
        <img className="absolute right-15 bottom-[800px] lg:bottom-[1249px] z-2" src="public/Group1.svg" alt="" />
      </div>

      {/* Mission Section */}
      <SectionWithImage
        backgroundColor="#E1E6E9"
        margin="-90px 0px 0px 0px"
        height="auto"
        imageSrc="public/Rectangle34.png"
        imageAlt="Mission Image"
        imagePosition="right"
        imageWidth="491px"
        imageHeight="450px"
      >
        <div className="w-full lg:w-[592px] relative flex flex-col gap-6 lg:gap-[29px]">
          <p className="font-medium text-lg sm:text-xl" style={{ color: '#EA4D33' }}>Our Mission</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-gray-900 mb-2">
            Our Mission
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal">
            At Pinnacle Axis, our mission is to transform challenges into opportunities and visions into reality. 
            We are committed to delivering innovative, precise, and reliable solutions that help our clients succeed.
             Guided by trust, expertise, and long-term partnerships, we ensure every project reflects our dedication to excellence and client satisfaction.</p>
          </div>
        </div>
      </SectionWithImage>

      {/* Mission Details Section */}
      <section className="py-8 sm:py-12 lg:py-46">
        <div className="max-w-[1430px] mx-auto px-4 flex flex-col lg:flex-row justify-between gap-[30px] text-center">
          <div style={{ backgroundColor: "black" }} className="w-[100%] h-[250px] lg:w-[741px] lg:h-[350px] mb-6 lg:mb-0">
            <img className="w-full h-full object-cover" src="public/Rectangle 3462.png" alt="" />
          </div>
          <div className="flex items-center">
            <div className="w-full lg:w-[592px] flex flex-col gap-2 lg:gap-[10px] text-start">
              <p className="font-medium text-lg sm:text-xl" style={{ color: '#EA4D33' }}>Our Mission</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-gray-900 mb-2">
                Our Mission
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal">
                  At Pinnacle Axis, our mission is to deliver world-class industrial solutions with precision, innovation, and reliability.
                  We aim to support industries by providing high-quality machining, fabrication, and engineering services that empower growth and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[35px] font-bold mb-8 sm:mb-12">
            Our Capabilities
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-1 place-items-center  md:gap-[0px] gap-[55px]">
            {/* Card 1 */}
            <CapabilityCard
              title="CNC turning, milling, and drilling operations"
              imageSrc="public/Box-1.png"
              imageAlt="CNC turning"
              reverse={false}
              className="w-full max-w-[800px]"
            />

            {/* Card 2 */}
            <CapabilityCard
              title="Custom machining tailored to client specifications"
              imageSrc="public/Box-1 (1).png"
              imageAlt="Custom machining"
              reverse={true}
              className="w-full max-w-[800px]"
            />

            {/* Card 3 */}
            <CapabilityCard
              title="Small-batch and large-scale production runs"
              imageSrc="public/Box-1 (2).png"
              imageAlt="Production runs"
              reverse={false}
              className="w-full max-w-[800px]"
            />
          </div>

          {/* Contact Button */}
          <div className="flex pt-20 justify-center">
                <button 
                  onClick={() => navigate("/contact")}
                  style={{ borderColor: "#EA4D33" }}
                  className="px-4 py-2 backdrop-blur text-[10px] sm:text-[18px] lg:text-[22px] font-normal border-3 hover:bg-opacity-10 transition"
                >
                  Contact Us
                </button>
                <div
                  style={{ 
                    backgroundColor: "#EA4D33", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}
                  className="sm:w-[45px] w-[30px] h-[35px] md:w-[48px] md:h-[48px] lg:w-[54px] lg:h-[54px]"
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
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        style={{ background: "#131C23" }} 
        className="relative py-8 lg:mb-[200px] sm:py-12 lg:py-16 my-6 sm:my-8 bg-white"
      >
        <div className="max-w-7xl lg:mx-10 px-4">
          <div className="flex flex-col lg:flex-row  justify-between  items-start">
            <div className="w-full lg:w-[832px] flex flex-col gap-4 lg:gap-2 h-auto lg:h-[100px]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-white mb-2">
                Our Story
              </h2>
              <div className="flex flex-col w-full lg:w-[832px] gap-4 lg:gap-2 h-auto lg:h-[100px]">
                <p className="text-white font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30px] tracking-[0] w-auto h-full">
                  At Pinnacle Axis, we believe true excellence is built on experience, trust, and long-term partnerships. 
                  With over 15 years in the industry, we have proudly delivered more than 1,000 successful projects across 
                  the Kingdom—earning the confidence of government entities and leading corporations alike.
                </p>
                <p className="text-white font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30px] tracking-[0] w-auto h-full">
                  What sets us apart is not just the scale of our achievements, but the strength of the relationships we build. We take pride in 
                  being a trusted partner to some of the Kingdom's most respected clients, delivering solutions that combine innovation, precision, and reliability.
                </p>
                <p className="text-white font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30px] tracking-[0] w-auto h-full">
                  Unlike many others, we don't claim to be perfect. We recognize our strengths and our weaknesses—and we are committed to turning every weakness into 
                  a strength. This culture of self-awareness and continuous improvement fuels our progress and ensures our clients always receive the best version of Pinnacle Axis.
                </p>
              </div>
            </div>
            <div 
              className="lg:w-[870px] lg:h-[420px] w-[100%] h-[350px] relative z-3 lg:right-[-100px] lg:bottom-[-150px] mt-6 lg:mt-0"
            >
              <img className="w-full lg:w-full lg:h-full h-full object-cover" src="public/Rectangle34.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutpage;
