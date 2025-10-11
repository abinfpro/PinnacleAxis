import React from 'react';
import { Link } from 'react-router-dom';

const ScrollingCards = ({ cards }) => {
  return (
    <div className="scroll-container w-full max-w-[1300px]">
      {/* On mobile: overflow-x-auto for manual scroll */}
      {/* On xl and above: overflow-hidden + auto-scroll animation */}
      <div className="scroll-wrapper overflow-x-auto xl:overflow-hidden whitespace-nowrap scrollbar-hide">
        <div className="scroll-content-wrapper inline-flex xl:animate-marquee">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="scroll-item inline-block mr-4 flex-shrink-0"
            >
              <div className="relative w-[250px] sm:w-[280px] lg:w-[300px] h-[300px] sm:h-[350px] lg:h-[400px]">
                <img
                  src={card.src}
                  alt={card.title}
                  className="industrial-card-image w-full h-full object-cover"
                />
                <div className="absolute -top-5 sm:-top-6 lg:-top-7 left-2 sm:left-3 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  {card.number}
                </div>
              </div>

              <Link to={card.link} onClick={() => window.scrollTo({ top: 0 })}>
                <p
                  style={{ background: '#131C23', color: '#fff' }}
                  className="flex justify-around py-4 w-auto px-5 absolute bottom-8 sm:bottom-10 mt-4 text-sm sm:text-md font-semibold"
                >
                  {card.title}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: '#fff' }}
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
    </div>
  );
};

export default ScrollingCards;
