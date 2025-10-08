import React from 'react';
import { Link } from 'react-router-dom';

const ScrollingCards = ({ cards, containerWidth = "1335px", leftPosition = "125px", topPosition = "345px" }) => {
  return (
    <div 
      className={`scroll-container`}
      style={{
        width: containerWidth,
        left: leftPosition,
        top: topPosition
      }}
    >
      <div className={`scroll-content-wrapper`}>
        {/* Render content twice for the seamless infinite loop */}
        {[...cards, ...cards].map((card, index) => (
          <div key={`${card.id}-${index}`} className="scroll-item">
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px]">
              <img
                src={card.src}
                alt={card.title}
                className="industrial-card-image w-full h-full object-cover"
              />
              <div className="absolute top-[-20px] sm:top-[-24px] lg:top-[-28px] left-2 sm:left-3 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                {card.number}
              </div>
            </div>
            <Link to={card.link}>
              <p 
                style={{ background: "#131C23", color: "#fff" }} 
                className="flex justify-around py-4 lg:w-[300px] md:w-[280px] w-[250px] absolute bottom-8 sm:bottom-10 mt-4 text-sm sm:text-md font-semibold"
              >
                {card.title}
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
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCards;
