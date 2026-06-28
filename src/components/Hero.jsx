import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Star, Users } from 'lucide-react';
import hero from "../assets/image.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-background dark:bg-black pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-secondary dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 text-primary dark:text-pink-300 px-4 py-2 rounded-full w-fit">
              <Sparkles size={16} />
              <span className="text-sm font-semibold tracking-wide uppercase">Premium Beauty Salon</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              Enhance Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Natural Beauty
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Professional beauty treatments designed to make you look and feel your absolute best. Experience luxury and care like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-pink-500/30">
                <Calendar className="mr-2" size={20} />
                Book Appointment
              </Link>
              <a href="#services" className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-full font-medium text-lg transition-all transform hover:-translate-y-1">
                Explore Services
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white">5+</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white">1 Months</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white">25+</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Services</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-t-[100px] rounded-b-[30px] overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
              <img 
                src={hero} 
                alt="Beautiful Indian Bride" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-gray-100 dark:border-gray-700 z-10"
            >
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                <Star className="text-yellow-500" fill="currentColor" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">4.9/5</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Customer Rating</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
