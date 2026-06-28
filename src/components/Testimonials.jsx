import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background dark:bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-pink-100 dark:bg-pink-900/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What Our Clients Say
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="glass-card dark:bg-gray-800/80 p-8 md:p-12 rounded-[40px] flex flex-col items-center text-center h-full justify-center">
                  <Quote className="text-primary/20 w-20 h-20 absolute top-8 left-8 -z-10" />
                  
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium italic mb-8 max-w-2xl leading-relaxed">
                    "{testimonialsData[currentIndex].text}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonialsData[currentIndex].image} 
                      alt={testimonialsData[currentIndex].name} 
                      className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md mb-3"
                    />
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonialsData[currentIndex].name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonialsData.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
