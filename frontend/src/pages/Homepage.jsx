import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Counter from "../Components/Counter";
import ContactCard from "../Components/ContactCard";
import ScrollingCards from "../Components/ScrollingCards";

const ACCENT_ORANGE = "#EA4D33";
const PRIMARY_DARK = "#131C23";

// Data Definitions
const heroImages = ["/homeimage.png", "/hero1.jpg"];

const expertiseCards = [
  { id: 1, number: "01", title: "Machining Division", src: "/hero1.jpg", link: "/service?service=machining" },
  { id: 2, number: "02", title: "Steel Fabrication Division", src: "/experties.jpg", link: "/service?service=Fabrication" },
  { id: 3, number: "03", title: "Rubber and PU Division", src: "/experties1.jpg", link: "/service?service=Rubber" },
  { id: 4, number: "04", title: "Laser and CNC", src: "/experties2.jpg", link: "/service?service=Laser" },
  { id: 5, number: "05", title: "Cutting, Bending & Rolling", src: "/experties.jpg", link: "/service?service=Cutting" },
];

const statsData = [
  { target: 15, suffix: "+", label: "Years of Experience" },
  { target: 1000, suffix: "+", label: "Projects Completed" },
  { target: 300, suffix: "+", label: "Skilled Professionals" },
  { target: 60, suffix: "K+", label: "Hours of Expertise Delivered", isKilo: false },
];

const contactData = [
  {
    title: "There are many variations",
    phone: "+966 556207221",
    email: "info@pinnaxsa.com"
  },

];

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Hero Slider Effect for auto-scrolling
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

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
    
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 1.5s ease-in-out;
    }
    .slide.active {
      opacity: 1;
    }

    /* Infinite Horizontal Scroll Styles */
    .scroll-container {
      overflow: hidden;
      padding: 1rem 0;
    }
    
    @media (min-width: 640px) {
      .scroll-container {
        padding: 1.5rem 0;
      }
    }
    
    @media (min-width: 1024px) {
      .scroll-container {
        padding: 2rem 0;
      }
    }
    
    .scroll-content-wrapper {
      display: flex;
      white-space: nowrap;
      animation: scroll-left 40s linear infinite;
      will-change: transform;
    }
    .scroll-item {
      flex: 0 0 auto;
      width: 250px;
      margin-right: 1rem;
    }
    
    @media (min-width: 640px) {
      .scroll-item {
        width: 280px;
        margin-right: 1.25rem;
      }
    }
    
    @media (min-width: 1024px) {
      .scroll-item {
        width: 300px;
        margin-right: 1.5rem;
      }
    }
    
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    /* Section 3: Outline Text Style */
    .outline-text {
      font-size: clamp(2rem, 8vw, 6rem);
      line-height: 1;
      font-weight: 800;
      color: transparent;
      -webkit-text-stroke: 1px ${ACCENT_ORANGE};
      text-stroke: 1px ${ACCENT_ORANGE};
      display: block;
    }
    
    @media (min-width: 1024px) {
      .outline-text {
        font-size: clamp(3rem, 10vw, 8rem);
      }
    }

    /* Industrial Cards: Grayscale effect */
    .industrial-card-image {
      filter: grayscale(100%);
      transition: filter 0.3s ease;
    }
    .industrial-card-image:hover {
      filter: grayscale(0%);
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

      {/* Section 1: Hero Slider */}
      <section className="slider-wrapper relative">
        {/* Slides */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={src}
              alt={`Industrial Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="lg:flex items-center gap-4 lg:gap-7 text-white w-full max-w-6xl px-4 sm:px-8 text-center lg:text-left">
            <div className="w-[200px] lg:block hidden sm:w-[300px] lg:w-[400px] xl:w-[381px] h-[60px] sm:h-[80px] lg:h-[100px] xl:h-[106px] flex-shrink-0">
              <img
                className="w-auto h-full bg-transparent"
                src="/heroIcon.png"
                alt="Group 4"
              />
            </div>
            <div className="flex relative flex-col gap-4 items-center lg:items-start">
              {/* <div className="bg-[#131c23] absolute right-[-220px] bottom-[-165px] text-[18px] font-medium w-[330px] p-[35px]">Tel: </div> */}
              <a
                href="tel:+966 556207221"
                className="bg-[#131c23] text-white font-medium z-10 p-4 md:p-6 text-sm md:text-lg w-64 md:w-80 fixed md:absolute bottom-4 md:bottom-[-160px] right-4 md:right-[-90px] rounded-lg shadow-lg text-centertransition-all">
                Tel: +966 556207221
              </a>
              <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold tracking-wider">
                Together We Grow
              </h1>
              <p className="font-normal leading-[24px] sm:leading-[28px] text-[18px] sm:text-[20px] lg:text-[22px] text-center lg:text-start">
                At Pinnacle Axis, excellence is more than a promise, it's a way
                of working. We take pride in transforming challenges into
                opportunities.
              </p>

              <div className="flex items-center">
                <button
                  onClick={() => { navigate("/contact"), window.scrollTo({ top: 0 }) }}
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
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="hidden lg:block">
        <img className="absolute right-0 top-[400px] lg:top-[506px] z-3" src="/Group2.svg" alt="" />
        <img className="absolute right-15 bottom-[1200px] lg:bottom-[1573px] z-2" src="/Group1.svg" alt="" />
        <img className="absolute left-24 w-[50px] top-[100px] lg:top-[1285px] z-4" src="/Group10.svg" alt="" />
      </div>

      {/* Section 2: Industrial Expertise */}
      <section
        style={{ background: "#E1E6E9", }}
        className="relative py-8 sm:py-12 lg:py-16 bg-white md:h-[774px] lg:h-[700px] h-[836px] lg:ml-[60px] lg:mt-[60px] "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 items-start mb-8 lg:mb-10">
            <div className="w-full lg:w-[437px] flex flex-col gap-2">
              <p className="font-medium text-lg sm:text-xl" style={{ color: '#EA4D33' }}>Services</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-gray-900 mb-2">
                Our Expertise in Industrial Services
              </h2>
              <div className="flex items-center gap-2 underline text-[#EA4D33]">
                <p className="text-lg sm:text-xl font-medium text-[#EA4D33]">
                  Explore Our Services
                </p>
                <img src="/send2.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-5 w-full lg:w-[592px] mt-4 lg:mt-10">
              <p className="text-lg sm:text-xl lg:text-[22px] font-semibold text-gray-900">
                At Pinnacle Axis, we deliver precision, reliability, and innovation across every division.
              </p>
              <p className="font-normal text-lg sm:text-xl lg:text-[22px]">
                With over 15 years of proven expertise and 1,000+ successful projects, our services are designed to meet
                diverse industrial needs with world-class quality.
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Card Container */}
        <div className=" relative w-full lg:w-[1335px] lg:left-[125px] scroll-container">
          <ScrollingCards cards={expertiseCards} />
        </div>
      </section>

      {/* Section 3: Since 2005 */}
      <section className="py-12 sm:py-16 lg:py-50 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[18px] !text-[60px] sm:!text-[24px] md:!text-[105px] lg:!text-[150px] w-full font-medium outline-text">since 2005</span>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[50px] space-y-6 lg:space-y-0 lg:space-x-12 mt-8 lg:mt-10">
            <div className="w-auto h-[100px] lg:block hidden flex items-end">
              <img src="/arrow.svg" className=" w-32 sm:w-40" alt="" />
            </div>
            <div className="lg:text-left max-w-[845px] flex flex-col gap-4">
              <span style={{ color: "#EA4D33", fontWeight: "500", fontSize: "18px", sm: "21px" }}>Proven Expertise</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                15+ Years of Industrial Excellence
              </h3>
              <p className="font-semibold text-lg sm:text-xl lg:text-[22px]">Pioneering the Future of Industrial Service in the GCC</p>
              <p className="font-normal text-lg sm:text-xl lg:text-[22px]">
                Our highly skilled professionals have driven the successful delivery of 1,000+ complex
                projects across the GCC and beyond. We don't just provide a service; we take ownership of your success,
                ensuring every solution is executed with unparalleled quality, safety, and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Build the Future with Pinnacle Axis */}
      <section
        className="py-12 sm:py-16 lg:py-24 text-white"
        style={{ backgroundColor: PRIMARY_DARK }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-2">
            {/* Left Side Content */}
            <div>
              <h2 className="text-2xl lg:text-start text-center sm:text-3xl lg:text-[48px] font-medium mb-6 lg:mb-8 leading-tight">
                Build the Future with Pinnacle Axis
              </h2>
            </div>
            <div className="flex flex-col gap-8 lg:gap-[61px]">
              <p className="font-normal text-lg sm:text-xl lg:text-[22px]">
                Pinnacle Axis is the trusted choice for industries seeking reliable, innovative, and high-quality solutions.
                With proven expertise in steel fabrication, machining, and industrial services, we deliver precision and durability in every project.
                Our strong values of honesty, respect, and continuous improvement make us a partner you can grow with.
              </p>

              <div className="grid grid-cols-2 lg:flex gap-4 lg:gap-8 mt-6 lg:mt-10">
                {statsData.map((stat, index) => (
                  <Counter key={index} {...stat} />
                ))}
              </div>

              <div className="flex justify-center lg:flex lg:justify-start">
                <button
                  onClick={() => { navigate("/contact"); window.scrollTo({ top: 0 }) }}
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
          </div>
        </div>
      </section>

      {/* Section 5: Contact Us */}
      <ContactCard
        title="Contact Us"
        contacts={contactData}
        showImage={true}
        imageSrc="/contact.jpg"
        imageAlt="Contact Banner"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
