import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    title: "The Bridal Package",
    description: "The ultimate preparation for your big day. We ensure you glow with confidence from head to toe.",
    price: "₹25,000",
    duration: "6 Hours",
    benefits: [
      "HD Bridal Makeup & Hairstyling",
      "Pre-bridal Facial & Cleanup",
      "Spa Manicure & Pedicure",
      "Full Body Polishing",
      "Draping & Accessories placement"
    ],
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Luxury Facial Spa",
    description: "Experience the epitome of relaxation with our signature luxury facial, designed to hydrate, lift, and rejuvenate.",
    price: "₹8,500",
    duration: "2 Hours",
    benefits: [
      "Deep Cleansing & Exfoliation",
      "24K Gold Mask Application",
      "Lymphatic Drainage Massage",
      "Eye Revitalizing Treatment",
      "Customized Serums & Moisturizers"
    ],
    image: "https://images.unsplash.com/photo-1506456075487-750734e5a956?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Hair Transformation",
    description: "Revamp your look entirely with our master stylists using top-tier products for long-lasting results.",
    price: "₹12,000",
    duration: "4 Hours",
    benefits: [
      "Consultation & Style Planning",
      "Balayage or Global Coloring",
      "Keratin/Botox Treatment",
      "Precision Haircut",
      "Styling & Aftercare Guide"
    ],
    image: "https://images.unsplash.com/photo-1583900985737-6d0422550f6a?auto=format&fit=crop&q=80&w=1000"
  }
];

const DetailCard = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-2">Signature Experiences</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Curated Packages
          </h3>
        </div>

        <div className="space-y-24">
          {packages.map((pkg, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div 
                key={pkg.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                {/* Image side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  </div>
                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-32 h-32 bg-pink-100 dark:bg-pink-900/30 rounded-full -z-10 blur-2xl`}></div>
                </motion.div>

                {/* Content side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {pkg.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-8 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center">
                      <CreditCard className="text-primary mr-2" size={20} />
                      <span className="font-semibold text-xl">{pkg.price}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-primary mr-2" size={20} />
                      <span className="font-medium">{pkg.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mt-1 bg-pink-100 dark:bg-pink-900/40 p-1 rounded-full mr-4 shrink-0">
                          <Check className="text-primary w-4 h-4" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className="self-start px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg hover:bg-primary dark:hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    Reserve Package
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DetailCard;
