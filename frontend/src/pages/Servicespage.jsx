import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import SectionWithImage from "../Components/SectionWithImage";
import ServiceCard from "../Components/ServiceCard";
import ScrollingCards from "../Components/ScrollingCards";
import ContactCard from "../Components/ContactCard";

const ACCENT_ORANGE = "#EA4D33";
const PRIMARY_DARK = "#131C23";

const expertiseCards = [
  { id: 1, number: "01", title: "Welding Services", src: "public/hero1.jpg" },
  { id: 2, number: "02", title: "Metal Fabrication", src: "public/experties.jpg" },
  { id: 3, number: "03", title: "Robotic Arms", src: "public/experties1.jpg" },
  { id: 4, number: "04", title: "CNC Machining", src: "public/experties2.jpg" },
  { id: 5, number: "05", title: "Cutting Services", src: "public/experties.jpg" },
];

const serviceCards = [
  {
    imageSrc: "public/serimg.png",
    imageAlt: "Accuracy and Reliability",
    title: "Accuracy and Reliability for Complex Engineering Needs"
  },
  {
    imageSrc: "public/serimg1.png",
    imageAlt: "Cost-Effective Solutions",
    title: "Cost-Effective Solutions Without Compromising Quality"
  },
  {
    imageSrc: "public/serimg2.png",
    imageAlt: "On-Time Delivery",
    title: "On-Time Delivery for Critical Projects"
  }
];

const Servicespage = () => {
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
      className="bg-white text-gray-800 antialiased"
    >
      {/* Inject custom styles */}
      <style>{customStyles}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="slider-wrapper lg:mb-[60px] relative">
        <div className="h-full">
          <img
            src="public/serviceimg.png"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-opacity-50 flex justify-center mt-[15px] lg:mt-25">
          <div className="flex gap-4 lg:gap-7 text-white w-full max-w-4xl px-4 sm:px-8 text-center">
            <div className="flex flex-col gap-4 items-center">
              <h1 className=" text-2xl md:text-[48px] font-semibold tracking-wider">
                Machining Division
              </h1>
              <p className="font-medium leading-[24px] sm:leading-[28px] text-[18px] sm:text-[20px] lg:text-[22px] text-center">
                At Pinnacle Axis, our Machining Division specializes in delivering high-precision components for diverse
                industrial applications. With state-of-the-art machinery and skilled professionals, we provide solutions 
                that meet the tightest tolerances and the highest quality standards.
              </p>
              <div className="flex justify-center lg:flex lg:justify-center">
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
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="hidden lg:block">
        <img className="absolute right-0 top-[400px] lg:top-[506px] z-3" src="public/Group2.svg" alt="" />
        <img className="absolute left-24 w-[50px] top-[2000px] lg:top-[2685px] z-4" src="public/Group10.svg" alt="" />
      </div>

      {/* What We Do Section */}
      <SectionWithImage
        backgroundColor="#E1E6E9"
        margin="-5px 0px 0px 0px"
        height="auto"
        imageSrc="public/Rectangle 34624859.png"
        imageAlt="What We Do Image"
        imagePosition="right"
        imageWidth="491px"
        imageHeight="550px"
        tag="true"
      >
        <div className="w-full lg:w-[592px] flex flex-col gap-6 lg:gap-[29px]">
          <p className="font-medium text-lg sm:text-xl" style={{ color: '#EA4D33' }}>Machining Division</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-gray-900 mb-2">
            What we do?
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal">
            The Machining Division at Pinnacle Axis is the backbone of our precision engineering capabilities. With a fleet of advanced CNC machines and a team of experienced professionals, we deliver solutions that consistently meet the highest global benchmarks.

We specialize in producing complex, high-accuracy components for industries where reliability and precision are mission-critical. Our capabilities include:

Turning & Milling – Crafting precise cylindrical and prismatic parts with tight tolerances.

Drilling & Boring – Executing accurate hole-making for critical assemblies and heavy-duty applications.

Custom Machining Jobs – Tailored production for specialized industrial requirements.

By integrating cutting-edge tools with strict quality control, we ensure durability, repeatability, and flawless performance in every component manufactured. Our Machining Division proudly serves industries such as oil & gas, construction, manufacturing, aerospace, and heavy machinery—providing parts that keep their operations running smoothly and efficiently.</p>
          </div>
        </div>
      </SectionWithImage>

      {/* Why Choose Us Section */}
      <section className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-auto items-center justify-center pt-12 sm:pt-16 lg:pt-20 h-auto sm:h-[600px] lg:h-[717px]">
        <p className="font-semibold text-3xl sm:text-4xl lg:text-5xl">Why Choose Us</p>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-15">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              className="w-full sm:w-[300px] lg:w-auto"
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section 
        style={{ background: "#E1E6E9", margin: "60px 0px 0px 0px" }} 
        className="relative py-8 sm:py-12 lg:h-[740px] lg:py-16 bg-white"
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
      </section>

      {/* Spacer */}

      {/* Scrolling Cards */}
      <div className="absolute w-full lg:w-[1335px] lg:left-[185px] lg:top-[2350px] scroll-container">
        <ScrollingCards cards={expertiseCards} />
      </div>

      {/* Contact Section */}
      <ContactCard 
        title=""
        contacts={[{
          title: "",
          phone: "",
          email: "",
          description: "Behind Pinnacle Axis is a team of highly skilled engineers, technicians, and industry experts who bring their knowledge and passion to every project. Our people are our greatest strength — working together to deliver solutions that are precise, durable, and future-ready."
        }]}
        showImage={true}
        imageSrc="public/contact.jpg"
        imageAlt="Contact Banner"
        tag="true"
      />

      {/* Footer */}
      <Footer/>
    </div>



  );
};

export default Servicespage;
