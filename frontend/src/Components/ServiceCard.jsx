import React from 'react';

const ServiceCard = ({ 
  service,
  imageSrc, 
  imageAlt, 
  title, 
  className = ""
}) => {
  return (
    <div className={`relative w-full mx-auto ${className}`}>
      <img className=" w-full object-cover" src={imageSrc} alt={imageAlt} />
      <div className="absolute top-[40px] md:top-[50px] lg:top-[60px] p-4 w-[280px] md:w-[225px] lg:w-[305px] text-[16px] md:text-[15px] lg:text-[18px] text-white h-auto bg-[#131C23] font-medium">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;

