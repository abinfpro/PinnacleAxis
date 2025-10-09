import React from 'react';
import { ArrowRight } from 'lucide-react';

const CapabilityCard = ({ 
  title, 
  des,
  imageSrc, 
  imageAlt, 
  reverse = false,
  className = ""
}) => {
  return (
    <div className={`bg-gray-50 flex w-full max-w-[800px] flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch overflow-hidden shadow-sm ${className}`}>
      <div className="flex-1 flex items-center justify-center text-left">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4">
          <h3 className="text-2xl font-semibold mb-3">
            {title}
          </h3>
          <p className='text-black'>{des}</p>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 sm:h-52 object-cover"
        />
      </div>
    </div>
  );
};

export default CapabilityCard;

