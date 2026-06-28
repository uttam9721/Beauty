import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-black rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-primary shadow-sm">
          {service.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
          {service.category}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
          {service.description}
        </p>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center text-primary font-medium group-hover:text-primary-hover transition-colors"
        >
          Book Now
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
