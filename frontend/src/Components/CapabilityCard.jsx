import React from 'react';
import { ArrowRight } from 'lucide-react';

const CapabilityCard = ({ 
  title, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  className = ""
}) => {
  return (
    <div className={`bg-gray-50 flex w-full max-w-[800px] flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch overflow-hidden shadow-sm ${className}`}>
      <div className="flex-1 flex items-center justify-center text-left">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
            {title}
          </h3>
          <a
            href="#"
            className="lg:flex sm:hidden hidden items-center text-sm font-medium text-gray-700 hover:text-red-500 transition"
          >
            Yours More <ArrowRight className="w-4 h-4 ml-1" />
          </a>
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

