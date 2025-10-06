import React from 'react';

const ServiceCard = ({ 
  service,
  imageSrc, 
  imageAlt, 
  title, 
  className = ""
}) => {
  return (
    <div className={`relative h-[300px] sm:h-[350px] lg:h-[406px] ${className}`}>
      <img className="h-full md:h-[300px] lg:h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
      <div className="absolute top-[40px] md:top-[50px] lg:top-[60px] p-4 w-[280px] md:w-[225px] lg:w-[305px] text-[16px] md:text-[15px] lg:text-[18px] text-white h-auto bg-[#131C23] font-medium">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;

