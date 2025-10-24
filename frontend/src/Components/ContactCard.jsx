import React from 'react';
import { Phone, InboxIcon, Target } from 'lucide-react';
import { useLocation } from 'react-router-dom';


const PRIMARY_DARK = "#131C23";

const ContactCard = ({
  title = "Contact Us",
  contacts = [],
  className = "",
  showImage = true,
  // imageSrc = "/contact.webp",
  imageAlt = "Contact Banner",
  tag
}) => { 

  const location = useLocation();
 
  const footerImages = {
    "/":{image:"/fabric5.webp"},
    "/service":{image:"/laser1.webp"},
    "/contact":{image:"/fabric2.webp"},
    "?service=machining":{image:"/mach8.webp"},
    "?service=Fabrication":{image:"/fabric2.webp"},
    "?service=Rubber":{image:"/rubber2.webp"},
    "?service=Laser":{image:"/laser4.webp"},
    "?service=Cutting":{image:"/cbr6.webp"},
  }
  // fallback image if route not found
const imageSrc = footerImages[location.search]?.image || footerImages[location.pathname]?.image 


  return (
    <section className={`pt-8 h-[400px] ${tag ? " lg:mt-[100px] mt-[50px] " : ""} sm:py-10 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="w-auto max-w-7xl mx-auto bg-white flex flex-col items-center justify-center overflow-hidden">
          {/* Changed lg: to md: for the two-column grid starting at 768px */}
          <div className="grid grid-cols-1 md:px-[px] lg:px-[40px] md:pb-[0px] lg:pb-[40px] bg-white md:grid-cols-2 gap-10 w-full">

            {/* Image Card */}
            {/* {showImage && ( */}
              <div className={`relative hidden  md:block md:h-[300px] lg:h-full overflow-hidden shadow-2xl`}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  // Adjusted sizing for md: and lg:
                  className="w-full lg:h-full md:h-96 object-cover opacity-90"
                />
              </div>
            {/* )} */}

            {/* Contact Details */}
            <div
              className={`space-y-6 sm:space-y-8 px-4 md:h-[300px]  ${tag ? "lg:flex " : " "} lg:h-full sm:px-5 py-4 sm:py-5 ${showImage ? 'md:col-span-1 order-1 md:order-2' : 'col-span-2'}`}
              style={{ backgroundColor: PRIMARY_DARK }}
            >
              <h2 className="text-xl sm:text-2xl text-center md:text-[25px] font-medium text-white">
                {title}
              </h2>

              <div className="flex flex-col gap-4 sm:gap-6">
                
                {contacts.map((contact, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div>
                      <p className={`flex items-center ${tag ? "lg:text-[29.5px] lg:font-light " : " "} text-center gap-3 text-white`}>
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
                       <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`} target='_blank'  rel="noopener noreferrer">{contact.email}</a>
                      </h4>
                    </div>
                  </div>
                ))}
                {/* Google Map */}

                {!tag && (
  <div className="mt-4 w-full">
    <div className="relative w-full pb-[56.25%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14287.296506604203!2d50.055085!3d26.4613975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fe7ec97617a3%3A0x4fd214c7cb9d2314!2sAl%20Muhammadiyah%2C%20Dammam%2032433%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1759940344844!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Pinnacle Axis Location"
      ></iframe>
    </div>
  </div>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
</section >
  );
};

export default ContactCard;

