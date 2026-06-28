import React from 'react';
import { servicesData } from '../data/services';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-2">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Premium Services
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Indulge in our wide range of luxury beauty treatments. We use only the best products to ensure you get the results you desire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
