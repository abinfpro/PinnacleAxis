import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionWithImage from "../Components/SectionWithImage";
import ServiceCard from "../Components/ServiceCard";
import ScrollingCards from "../Components/ScrollingCards";
import ContactCard from "../Components/ContactCard";
import { useSearchParams } from 'react-router-dom';
import { useState,useEffect } from "react";


const ACCENT_ORANGE = "#EA4D33";
const PRIMARY_DARK = "#131C23";

const expertiseCards = [
  { id: 1, number: "01", title: "Machining Division", src: "/mach6.webp", link:"/service?service=machining" },
  { id: 2, number: "02", title: "Steel Fabrication Division", src: "/fabric1.webp", link:"/service?service=Fabrication" },
  { id: 3, number: "03", title: "Rubber and PU Division", src: "/rubber3.webp", link:"/service?service=Rubber" },
  { id: 4, number: "04", title: "Laser and CNC", src: "/laser4.webp", link:"/service?service=Laser" },
  { id: 5, number: "05", title: "Cutting, Bending & Rolling", src: "/cbr1.webp", link:"/service?service=Cutting" },
];


const ALL_IMAGE = {
  machining: [
    { image: "mach1.webp", imageAlt: "Accuracy and Reliability", title: "Precision Engineering for High-Performance Components" },
    { image: "mach5.webp", imageAlt: "Cost-Effective Solutions", title: "Advanced Equipment Ensuring Dimensional Accuracy" },
    { image: "mach2.webp", imageAlt: "On-Time Delivery",         title: "Fast Turnaround with Consistent Quality" },
  ],
  Fabrication: [
    { image: "fabric2.webp", imageAlt: "Accuracy and Reliability", title: "Expert Craftsmanship for Complex Structural Projects" },
    { image: "fabric3.webp", imageAlt: "Cost-Effective Solutions", title: "Durable and Safe Builds with Quality Assurance" },
    { image: "fabric4.webp", imageAlt: "On-Time Delivery",         title: "Timely Execution Meeting Every Specification" },
  ],
  Rubber: [
    { image: "rubber2.webp", imageAlt: "Accuracy and Reliability", title: "Custom-Molded Solutions for Industrial Applications" },
    { image: "rubber1.webp", imageAlt: "Cost-Effective Solutions", title: "High Durability and Resistance to Wear and Tear" },
    { image: "rubber3.webp", imageAlt: "On-Time Delivery",         title: "Reliable Performance Under Demanding Conditions" },
  ],
  Laser: [
    { image: "laser1.webp", imageAlt: "Accuracy and Reliability", title: "High-Accuracy Cutting for Intricate Designs" },
    { image: "laser4.webp", imageAlt: "Cost-Effective Solutions", title: "Superior Finishes with Minimal Material Waste" },
    { image: "laser3.webp", imageAlt: "On-Time Delivery",         title: "Efficient Production with Automated Precision" },
  ],
  Cutting: [
    { image: "cbr6.webp", imageAlt: "Accuracy and Reliability", title: "Precise Metal Forming for Any Design Requirement" },
    { image: "cbr2.webp", imageAlt: "Cost-Effective Solutions", title: "Seamless Bends and Rolls with Advanced Machinery" },
    { image: "cbr3.webp", imageAlt: "On-Time Delivery",         title: "Consistent Results Delivered On Time, Every Time" },
  ],
}



const Servicespage = () => {
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




  const [searchParams] = useSearchParams();
  const serviceKey = searchParams.get('service'); // Gets 'machining', 'development', etc.
  const [serviceData, setServiceData] = useState(null);

  // Define a mapping object for your service content
  const ALL_SERVICES = {
      'machining': { title: 'Machining Division', subtitle: "Machining Division" ,des: 'Our machining division specializes in precision engineering, delivering high-quality components with tight tolerances. Equipped with advanced tools, we handle turning, milling, drilling, and custom machining jobs. We ensure accuracy, durability, and efficiency for industrial applications.',img:"/mach6.webp",
        description:"The Machining Division at Pinnacle Axis is the backbone of our precision engineering capabilities. With a fleet of advanced CNC machines and a team of experienced professionals, we deliver solutions that consistently meet the highest global benchmarks. We specialize in producing complex, high-accuracy components for industries where reliability and precision are mission-critical.Our capabilities include: Turning & Milling – Crafting precise cylindrical and prismatic parts with tight tolerances. Drilling & Boring – Executing accurate hole-making for critical assemblies and heavy-duty applications. Custom Machining Jobs – Tailored production for specialized industrial requirements.Quality & Client Collaboration: By integrating cutting-edge tools with strict quality control, we ensure durability, repeatability, and flawless performance in every component manufactured. Our Machining Division proudly serves industries such as oil & gas, construction, manufacturing, aerospace, and heavy machinery—providing parts that keep their operations running smoothly and efficiently."},
      'Fabrication': { title: 'Steel Fabrication Division',subtitle: "Steel Fabrication Division", des: 'We provide complete steel fabrication solutions tailored to industrial and commercial needs. From design to assembly, our team delivers durable structures and components. Our expertise ensures strength, reliability, and timely execution.',img:"/fabric6.webp",
        description:"The Steel Fabrication Division at Pinnacle Axis is at the core of our structural excellence. Equipped with advanced machinery and supported by skilled fabricators and engineers, we deliver robust, high-precision steel solutions that meet international standards of quality and safety. We specialize in designing, fabricating, and assembling complex steel structures for diverse industrial sectors, ensuring strength, accuracy, and long-term performance.Our capabilities include: Cutting, Bending & Rolling – Shaping steel with precision to achieve exact dimensions and geometries. Welding & Assembly – Executing high-strength joints and seamless integrations for structural reliability. Custom Fabrication Jobs – Delivering tailor-made solutions to meet unique project requirements and engineering specifications.Quality & Client Collaboration: By combining state-of-the-art equipment with strict inspection protocols, we guarantee consistency, durability, and timely delivery. Our Steel Fabrication Division proudly supports sectors such as oil & gas, infrastructure, construction, manufacturing, and heavy industries—providing critical components and structures that power operations."},
      'Rubber': { title: 'Rubber and PU Division',subtitle: "Rubber and PU Division", des: 'Our Rubber and PU division manufactures customized parts for industrial wear and tear applications. We produce seals, linings, rollers, and protective coatings that extend equipment life. High-performance materials guarantee durability under tough conditions.',img:"/rubber1.webp",
       description:"The Rubber and PU Division at Pinnacle Axis plays a key role in delivering durable, high-performance components for demanding industries. Using advanced molding and casting technologies, we produce precision-engineered rubber and polyurethane products that meet global quality standards. We specialize in designing, manufacturing, and supplying custom-molded parts where resilience, flexibility, and wear resistance are essential.Our capabilities include: Molding & Casting – Producing components with accurate shapes and consistent properties. Custom PU & Rubber Products – Tailoring solutions for unique industrial needs. Repair & Refurbishment – Extending component life through precision rework.Quality & Client Collaboration: With strict quality control and modern production methods, we ensure long-lasting performance. The division serves oil & gas, construction, manufacturing, marine, and heavy industries—providing essential components that enhance operational efficiency."},
      'Laser': { title: 'Laser and CNC',subtitle: "Laser and CNC", des: 'We use advanced equipment and the latest technology to deliver high-speed, high-accuracy cutting and machining. Our systems handle metals, plastics, and composites with precision. This ensures detailed designs, smooth finishes, and faster project completion.',img:"/laser2.webp",
        description:"The Laser and CNC Division at Pinnacle Axis drives precision manufacturing with advanced cutting, engraving, and machining solutions. Equipped with state-of-the-art CNC machines and high-powered laser systems, we deliver intricate and accurate results across diverse industrial applications. We specialize in high-speed, high-accuracy processing of metals and other materials, ensuring clean finishes and consistent quality.Our capabilities include: Laser Cutting & Engraving – Achieving fine detailing, sharp edges, and smooth surfaces. CNC Machining – Producing complex parts with tight tolerances and repeatable accuracy. Custom Fabrication – Tailoring solutions for specialized design and engineering needs.Quality & Client Collaboration: Through advanced technology and strict quality standards, we guarantee efficiency, precision, and reliability in every project. The division supports oil & gas, construction, manufacturing, and heavy industries—delivering components that meet demanding operational requirements."},
      'Cutting': { title: 'Cutting, Bending & Rolling',subtitle: "Cutting, Bending & Rolling", des: 'We offer precision cutting, bending, and rolling services to meet diverse metal fabrication requirements. With advanced machinery, we process plates, sheets, and profiles to exact specifications. This ensures consistency and accuracy in every project.',img:"/cbr1.webp",
       description:"The Cutting, Bending & Rolling Division at Pinnacle Axis provides high-precision sheet metal processing tailored to diverse industrial needs. Using advanced machinery and skilled technicians, we deliver accurate cuts, smooth bends, and high-quality rolled components with exceptional consistency. We specialize in transforming raw metal sheets into precisely engineered components, ensuring structural integrity and flawless finishes.Our capabilities include: Cutting – Precise shaping of metal sheets for any design or scale. Bending – Achieving clean angles and consistent geometries. Rolling – Forming smooth curves and cylindrical structures for complex applications.Quality & Client Collaboration: By combining cutting-edge equipment with rigorous quality control, we ensure reliable, efficient, and durable results for industries such as construction, manufacturing, oil & gas, and heavy machinery. Our experienced team works closely with clients to meet exact specifications and project timelines. This collaborative approach allows us to deliver customized solutions that drive long-term value and performance."}
      }
  useEffect(() => {
      if (serviceKey) {
          setServiceData(ALL_SERVICES[serviceKey]);
      } else {
           // Handle case with no parameter or a default view
           setServiceData({ title: 'Our Services', content: 'Please select a division from the menu.' });
      }
  }, [serviceKey]); // Re-run effect whenever the URL changes
  if (!serviceData) return <div>Loading...</div>;
  const picture = ALL_IMAGE[serviceKey];


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
            src={serviceData.img}
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-opacity-50 flex justify-center mt-[15px] lg:mt-25">
          <div className="flex gap-4 lg:gap-7 text-white w-full max-w-4xl px-4 sm:px-8 text-center">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h1 className=" text-3xl md:text-[48px] font-semibold tracking-wider">
              {serviceData.title}
              </h1>
              <p className="font-medium leading-[25px] md:leading-[28px] lg:leading-[28px] text-[18px] md:text-[20px] lg:text-[22px] text-center">
            {serviceData.des}
              </p>
              <div className="flex justify-center hidden md:block  md:flex md:justify-center">
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

    

      {/* What We Do Section */}
      <SectionWithImage
        backgroundColor="#E1E6E9"
        margin="-5px 0px 0px 0px"
        height="auto"
        imageAlt="What We Do Image"
        imagePosition="right"
        imageWidth="491px"
        imageHeight="550px"
        tag="true"
        img={serviceKey}
      >
        <div className="w-full flex flex-col gap-6 lg:gap-[15px]">
          <p className="font-medium text-lg sm:text-xl" style={{ color: '#EA4D33' }}>{serviceData.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[437px] font-semibold text-gray-900 mb-2">
            What we do?
          </h2>
          <div className="flex items-center  gap-2">
           {/* <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal">
  {serviceData.description.split('Our capabilities include:')[0]}
  <br />
  <span className="font-semibold text-[#EA4D33]">Our capabilities include:</span>


  {serviceData.description.split('Quality & Client Collaboration:')[1]}
  <br />
  <span className="font-semibold text-[#EA4D33]">Quality & Client Collaboration:</span>
  
</p> */}


<p>
  {/* Part before "Our capabilities include:" */}
  {serviceData.description.split('Our capabilities include:')[0]}
  <br />
  <span className="font-semibold text-[#EA4D33]">Our capabilities include:</span>
  
  {/* Part between "Our capabilities include:" and "Quality & Client Collaboration:" */}
  {serviceData.description
    .split('Our capabilities include:')[1]
    ?.split('Quality & Client Collaboration:')[0]}
  <br />
  <span className="font-semibold text-[#EA4D33]">Quality & Client Collaboration:</span>

  {/* Part after "Quality & Client Collaboration:" */}
  {serviceData.description.split('Quality & Client Collaboration:')[1]}
</p>


          </div>
        </div>
      </SectionWithImage>

      {/* Why Choose Us Section */}
      <section className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-auto items-center justify-center pt-12 sm:pt-16 lg:pt-20 h-auto sm:h-[600px] lg:h-[717px]">
        <p className="font-semibold text-3xl sm:text-4xl lg:text-5xl">Why Choose Us</p>
        <div className="flex flex-col max-w-7xl sm:flex-row mb-[15px] gap-8 md:flex md:w-full md:gap-5 md:px-3 md:justify-around lg:justify-center sm:gap-12 lg:gap-15">
          {picture.map((card, index) => (
            <ServiceCard
              key={index}
              imagesrc={card.image}
              imageAlt={card.imageAlt}
              title={card.title}
              className=" industrial-card-image"
              service="true"
              // img={serviceKey}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{ background: "#E1E6E9", }}
        className="relative py-8 sm:py-12 lg:py-16 bg-white md:h-[774px] lg:h-[700px] h-[836px] lg:ml-[60px] lg:mt-[60px] "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex relative flex-col lg:flex-row justify-between gap-8 lg:gap-20 items-start mb-8 lg:mb-10">
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
        <div className=" relative max-w-[1455px] mx-auto flex justify-end scroll-container">
        <img className="absolute left-10 bottom-21.5 hidden xl:block" src="/Group10.svg" alt="" />
          <ScrollingCards cards={expertiseCards} />
        </div>
      </section>

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
        imageSrc="/contact.webp"
        imageAlt="Contact Banner"
        tag="true"
      />

      {/* Footer */}
      <Footer/>
    </div>



  );
};

export default Servicespage;
