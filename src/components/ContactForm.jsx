import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Call
    if (formData.name && formData.email && formData.phone) {
      toast.success('Appointment requested successfully! We will contact you soon.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      toast.error('Please fill all required fields.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[30px] shadow-2xl border border-gray-100 dark:border-gray-700"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Book an Appointment
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
            placeholder="Jane Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
              placeholder="+91 7837362719"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Service</label>
          <select 
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white appearance-none"
          >
            <option value="" disabled>Select a service...</option>
            <option value="bridal">Bridal Makeup</option>
            <option value="hair">Hair Styling & Color</option>
            <option value="facial">Luxury Facial</option>
            <option value="skincare">Skin Care Treatment</option>
            <option value="nails">Nail Art & Extensions</option>
            <option value="spa">Spa & Relaxation</option>
            <option value="other">Other / Consultation</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message / Special Requests</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white resize-none"
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full flex justify-center items-center py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg mt-4"
        >
          <span>Send Request</span>
          <Send className="ml-2 w-5 h-5" />
        </button>

      </form>
    </motion.div>
  );
};

export default ContactForm;
