// import React from 'react';

// const SectionWithImage = ({ 
//   backgroundColor = "#E1E6E9",
//   margin = "60px 0px 0px 60px",
//   height = "auto",
//   className = "",
//   children,
//   imageSrc,
//   imageAlt = "Section Image",
//   imagePosition = "right", // "left" or "right"
//   imageWidth = "491px",
//   imageHeight = "450px",
//   tag
// }) => {
//   return (
//     <section 
//       style={{ 
//         background: backgroundColor, 
//       }} 
//       className={`py-8 sm:py-12 lg:h-[540px] ${tag ? "md:h-[500px] h-[800px] lg:mt-[10px] lg:h-[650px]" : ""} h-[400px] lg:py-16 lg:mt-[60px] lg:ml-[55px] bg-white ${className}`}>
//       <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
//       <img className="absolute hidden xl:block right-[-95px] top-[-190px]" src="/Group2.svg" alt="" />
//         <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 items-start">
//           {/* Content */}
//           <div className="w-full lg:w-auto flex-1">
//             {children}
//           </div>
          
//           {/* Image */}
//           {imageSrc && (
//             <div 
//               style={{
//                 width: imageWidth,
//                 height: imageHeight
//               }} 
//               className={`relative  z-3 top-[80px] ${imagePosition === 'left' ? 'order-first' : 'order-last'} hidden lg:block`}
//             >
//               <img 
//                 className="w-full h-full object-cover" 
//                 src={imageSrc} 
//                 alt={imageAlt} 
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionWithImage;




import React from 'react';

const SectionWithImage = ({ 
  backgroundColor = "#E1E6E9",
  className = "",
  children,
  imageSrc,
  imageAlt = "Section Image",
  imagePosition = "right", // "left" or "right"
  tag
}) => {
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
          {imageSrc && (
            <div 
              className={` relative ${
                imagePosition === 'left' ? 'order-first' : 'order-last'
              } lg:max-w-xl lg:top-[140px] lg:w-auto lg:block`}
            >
              <img 
                className="w-full h-auto object-cover rounded-lg" 
                src={imageSrc} 
                alt={imageAlt} 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionWithImage;
