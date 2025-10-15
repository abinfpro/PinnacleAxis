import React from 'react';

const SectionWithImage = ({ 
  backgroundColor = "#E1E6E9",
  className = "",
  children,
  imageAlt = "Section Image",
  imagePosition = "right", // "left" or "right"
  tag,
  img
}) => {

  // const [serviceData, setServiceData] = useState(null);

const ALL_IMAGE = {
  'machining':{image:"/mach7.webp"},
  'Fabrication':{image:"/fabric1.webp"},
  'Rubber': {image:"/rubber3.webp"},
  'Laser': {image:"laser1.webp"},
  'Cutting': {image:"/cbr5.webp"}
}

const serviceData = ALL_IMAGE[img];

  return (
    <section 
      style={{ background: backgroundColor }}
      className={`py-8 sm:py-12 lg:mt-[60px] lg:py-16 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Decorative Image */}
        <img 
          className="absolute hidden xl:block right-[-95px] top-[-190px]" 
          src="/Group2.svg" 
          alt="" 
        />

        <div 
          className={`flex flex-col ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } justify-between gap-8 lg:gap-20 items-start`}
        >
          {/* Content */}
          <div className="w-full lg:flex-1">
            {children}
          </div>

          {/* Image */}
          {/* {serviceData && ( */}
            <div 
              className={` relative ${
                imagePosition === 'left' ? 'order-first' : 'order-last'
              } lg:max-w-xl lg:top-[140px] lg:w-auto lg:block`}
            >
              <img 
                className="w-full h-auto object-cover rounded-lg" 
                src={serviceData ? serviceData.image : "/mach6.webp"}
                alt={imageAlt} 
              />
            </div>
           {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default SectionWithImage;
