"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const stats = [
    {
      value: "2023",
      label: "In the industry since",
      isYear: true
    },
    {
      value: "20",
      label: "Projects Completed",
      suffix: "+"
    },
    {
      value: "20",
      label: "Clients Served",
      suffix: "+"
    },
    {
      value: "6",
      label: "Average Project Duration",
      suffix: " Months"
    },
    {
      value: "99%",
      label: "Customer Satisfaction Rate",
      suffix: "%"
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const targetValue = parseFloat(stat.isYear ? stat.value : stat.value.replace(/[^\d.]/g, ''));
      const duration = 2000; // 2 seconds for the animation
      const framesPerSecond = 60;
      const totalFrames = duration / 1000 * framesPerSecond;

      let frame = 0;
      const counter = setInterval(() => {
        frame++;

        // Calculate progress (0 to 1)
        const progress = frame / totalFrames;

        // Easing function to slow down as it approaches the end
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        // Calculate the current value
        const currentValue = Math.min(Math.floor(easedProgress * targetValue), targetValue);

        // Update the state
        setCounters(prevCounters => {
          const newCounters = [...prevCounters];
          newCounters[index] = currentValue;
          return newCounters;
        });

        // Stop when we reach the target
        if (frame >= totalFrames) {
          clearInterval(counter);
        }
      }, 1000 / framesPerSecond);
    });
  };

  const formatValue = (value:any, stat:any) => {
    if (stat.isYear) return value.toString();
    return `${stat.prefix || ''}${value}${stat.suffix || ''}`;
  };

  return (
    <section ref={sectionRef} className="relative md:px-[180px] py-16 md:py-24">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-white text-center text-3xl md:text-4xl font-medium mb-16">
          We&#39;ve been around for a long while
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="h-0.5 md:w-[206px] w-full text-left mx-0 mb-6 bg-[#FF5533]" />
              <div className="text-white text-3xl md:text-4xl font-bold mb-2 text-left">
                {formatValue(counters[index], stat)}
              </div>
              <div className="text-[#898989] text-left text-lg md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}