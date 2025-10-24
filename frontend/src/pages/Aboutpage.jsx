import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionWithImage from "../Components/SectionWithImage";
import CapabilityCard from "../Components/CapabilityCard";

const ACCENT_ORANGE = "#EA4D33";
const PRIMARY_DARK = "#131C23";

const Aboutpage = () => {
  const navigate = useNavigate();

  // Custom CSS for animations and styles
  const customStyles = `

    
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
            src="/about_image.webp"
            alt="About Us Background"
            className="w-full h-[100vh]  object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-opacity-50 flex justify-center">
          <div className="flex gap-4 lg:gap-7  text-white w-full max-w-4xl px-4 sm:px-8 text-center">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-semibold tracking-wider">
                About Us
              </h1>
              <p className="lg:font-normal leading-[18px] leading-[25px] lg:leading-[28px] text-[18px] lg:text-[22px] text-center">
                At Pinnacle Axis, excellence is more than a promise, it's a way of working. 
                we take pride in transforming challenges into opportunities
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Mission Section */}
      <SectionWithImage backgroundColor="#E1E6E9" margin="-90px 0px 0px 0px" height="auto" imageSrc="/Rectangle34.webp" imageAlt="Mission Image" imagePosition="right" imageWidth="491px" imageHeight="450px">
        <div className="w-auto relative flex flex-col gap-6 lg:gap-[29px]">
          <h2 style={{ color: '#EA4D33' }} className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-gray-900 mb-2">
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
      <section className=" lg:pt-46">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-[30px] mt-10 text-center">
          <div style={{ backgroundColor: "black" }} className="w-auto hidden lg:block h-full lg:w-[741px] lg:h-[350px] mb-6 lg:mb-0">
            <img className="w-full h-full object-cover" src="/cbr5.webp" alt="" />
          </div>
          <div className="flex items-center">
            <div className="w-full lg:w-[592px] flex flex-col gap-2 lg:gap-[10px] text-start">
              <h2 style={{ color: '#EA4D33' }} className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-gray-900 mb-2">
              Our Vision
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal">
                Our vision is to be the Kingdom’s most trusted partner in engineering and project deliver where innovation meets reliability. 
                We aim to set new benchmarks in quality and performance, driving growth for our clients while continuously raising our own standards through self-awareness and improvement.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 style={{ color: '#EA4D33' }} className="text-2xl sm:text-3xl lg:text-4xl text-[35px] font-bold mb-6">
            Our Capabilities
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-1 place-items-center  md:gap-[0px] gap-[55px]">
            {/* Card 1 */}
            <CapabilityCard
              title="CNC turning, milling, and drilling operations"
              imageSrc="/Box-1.webp"
              des="Our advanced CNC capabilities enable us to execute projects with precision, speed, and efficiency—delivering high-quality results across every scale."
              imageAlt="CNC turning"
              reverse={false}
              className="w-full max-w-[800px]"
            />

            {/* Card 2 */}
            <CapabilityCard
              title="Custom machining tailored to client specifications"
              imageSrc="/Box-1 (1).webp"
              des="With over 15 years of proven expertise, we specialize in developing customized solutions that meet unique client requirements while maintaining the highest standards of accuracy."
              imageAlt="Custom machining"
              reverse={true}
              className="w-full max-w-[800px]"
            />

            {/* Card 3 */}
            <CapabilityCard
              title="Small-batch and large-scale production runs"
              imageSrc="/Box-1 (2).webp"
              des="Whether it’s a one-off prototype or large-scale production, our team has successfully executed 1,000+ projects across the Kingdom—adapting to every challenge with reliability and consistency."
              imageAlt="Production runs"
              reverse={false}
              className="w-full max-w-[800px]"
            />
          </div>

          {/* Contact Button */}
          <div className="flex pt-20 justify-center">
                <button 
                  onClick={() => {navigate("/contact"),window.scrollTo({top:0})}}
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
                  className="w-[37px] h-[37px] md:w-[48px] md:h-[48px] lg:w-[54px] lg:h-[54px]"
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
  className="flex justify-center lg:mb-[200px] sm:py-12 lg:py-16 my-6 sm:my-8 bg-white"
>
  <div class="max-w-7xl relative py-10 w-full lg:flex justify-start items-start lg:gap-8 px-4">
  <img className="absolute right-0 hidden xl:block top-[-190px]" src="/Group1.svg" alt="" />
    <div class="w-full lg:w-[60%] flex flex-col">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl lg:w-[437px] font-semibold text-white mb-2">
        Our Story
      </h2>
      <div class="flex flex-col w-full lg:w-[832px] gap-4 lg:gap-2 h-auto">
        <p class="text-white font-normal text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem] lg:leading-[1.875rem] tracking-[0] w-auto h-full">
          At Pinnacle Axis, we believe true excellence is built on experience,
          trust, and long-term partnerships. With over 15 years in the industry,
          we have proudly delivered more than 1,000 successful projects across the
          Kingdom—earning the confidence of government entities and leading
          corporations alike.
        </p>
        <p class="text-white font-normal text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem] lg:leading-[1.875rem] tracking-[0] w-auto h-full">
          What sets us apart is not just the scale of our achievements, but the
          strength of the relationships we build. We take pride in being a trusted
          partner to some of the Kingdom's most respected clients, delivering
          solutions that combine innovation, precision, and reliability.
        </p>
        <p class="text-white font-normal text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem] lg:leading-[1.875rem] tracking-[0] w-auto h-full">
          Unlike many others, we don't claim to be perfect. We recognize our
          strengths and our weaknesses—and we are committed to turning every
          weakness into a strength. This culture of self-awareness and continuous
          improvement fuels our progress and ensures our clients always receive the
          best version of Pinnacle Axis.
        </p>
      </div>
    </div>
    
    <div
      class=" absolute w-[26%] h-full top-30 right-0 hidden lg:block">
      <img class="w-full h-full object-cover" src="/Rectangle34.webp" alt="" />
    </div>    
    
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutpage;
