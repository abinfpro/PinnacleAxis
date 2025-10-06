import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, suffix, label, isKilo = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500; // Animation duration in ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            // Calculate value using an easing function (simple linear for now)
            const value = Math.floor(progress * target);

            setCount(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target]);

  // Format count: Kilo values (60) are displayed as they are. Others get locale formatting (1,000).
  const displayCount = isKilo ? count : count.toLocaleString("en-US");

  return (
    <div className="stat-card" ref={ref}>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: "" }}>
        {displayCount}
        {suffix}
      </div>
      <p className="text-gray-300 font-normal text-xs sm:text-sm tracking-widest">{label}</p>
    </div>
  );
};

export default Counter;

