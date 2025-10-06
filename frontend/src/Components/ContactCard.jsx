import React from 'react';
import { Phone, InboxIcon } from 'lucide-react';

const PRIMARY_DARK = "#131C23";

const ContactCard = ({ 
  title = "Contact Us", 
  contacts = [], 
  className = "",
  showImage = true,
  imageSrc = "public/contact.jpg",
  imageAlt = "Contact Banner",
  tag
}) => {
  return (
    <section className={`pt-8 h-[400px] ${tag ? "lg:mt-[100px]" : ""} sm:py-10 bg-white ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-6xl mx-auto bg-white flex flex-col items-center justify-center overflow-hidden">
        {/* Changed lg: to md: for the two-column grid starting at 768px */}
        <div className="grid grid-cols-1 md:px-[px] lg:px-[40px] md:pb-[0px] lg:pb-[40px] bg-white md:grid-cols-2 gap-10 w-full">
          
          {/* Image Card */}
          {showImage && (
            // Changed hidden sm:block to hidden md:block: Image is hidden until 768px
            <div className="relative hidden md:block md:h-[300px] lg:h-full overflow-hidden shadow-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                // Adjusted sizing for md: and lg:
                className="w-full lg:h-full md:h-96 object-cover opacity-90"
              />
            </div>
          )}

          {/* Contact Details */}
          <div 
            // col-span-2 by default (mobile). At md: it becomes col-span-1.
            // The order is adjusted for md: to place contacts after the image (visually on the right).
            className={`space-y-6 sm:space-y-8 px-4 md:h-[300px]  ${ tag ? "lg:flex " : " "} lg:h-full sm:px-5 py-4 sm:py-5 ${showImage ? 'md:col-span-1 order-1 md:order-2' : 'col-span-2'}`}
            style={{ backgroundColor: PRIMARY_DARK }}
          >
            <h2 className="text-xl sm:text-2xl text-center md:text-[25px] font-medium text-white">
              {title}
            </h2>
            
            <div className="flex flex-col gap-4 sm:gap-6">
              {contacts.map((contact, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div>
                    <h4 className="text-[15px] sm:text-[17px] font-normal text-white">
                      {contact.title} 
                    </h4>
                  </div>
                  <div>
                    <p className={`flex items-center ${ tag ? "lg:text-[29.5px] lg:font-light " : " "} text-center gap-3 text-white`}>
                      {/* Assuming Phone is a component/icon */}
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> 
                      {contact.phone}
                      {contact.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-3 text-[15px] sm:text-[17px] font-normal text-white">
                      {/* Assuming InboxIcon is a component/icon */}
                      {!tag && <InboxIcon className="w-3 h-3 sm:w-4 sm:h-4" />}  
                      {contact.email}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  );
};

export default ContactCard;

