import React from 'react';
import { motion } from 'framer-motion';
import { Award, Droplets, Gem, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Certified Experts",
    description: "Our beauticians and stylists are highly trained professionals with years of industry experience."
  },
  {
    icon: <Gem className="w-8 h-8 text-white" />,
    title: "Premium Products",
    description: "We use only top-tier, international beauty brands to ensure the best results and care for you."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Hygienic Environment",
    description: "Strict sterilization and hygiene protocols are maintained for a safe and clean experience."
  },
  {
    icon: <Droplets className="w-8 h-8 text-white" />,
    title: "Affordable Packages",
    description: "Luxury beauty services at competitive prices, offering you the best value for your money."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-pink-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-2">Why Choose Us</h2>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
            The Jeenat Studio Difference
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-black p-8 rounded-[30px] shadow-lg border border-gray-100 dark:border-gray-800 text-center group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
