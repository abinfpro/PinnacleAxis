import React from 'react';

const ServiceCard = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  className = ""
}) => {
  return (
    <div className={`relative h-[300px] sm:h-[350px] lg:h-[406px] ${className}`}>
      <img className="h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
      <div className="absolute top-[40px] sm:top-[50px] lg:top-[60px] p-4 sm:p-5 w-[280px] sm:w-[300px] lg:w-[305px] text-[16px] sm:text-[17px] lg:text-[18px] text-white h-auto bg-[#131C23] font-medium">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;

