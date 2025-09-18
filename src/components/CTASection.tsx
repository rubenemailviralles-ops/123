import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, ArrowRight, CheckCircle, X } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: ''
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.');
    closeModal();
    setFormData({ name: '', email: '', phone: '', company: '', service: '' });
  };

  const handleContactClick = () => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-fade-in-up">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Join businesses using Automate Hub to streamline their operations and increase productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-slide-in-left delay-400">
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Custom automation solutions</span>
              </div>
            </div>

            <button 
              onClick={openModal}
              className="group bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover-pop-button flex items-center justify-center mx-auto shadow-lg animate-scale-in delay-600"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-500 mt-6 animate-fade-in delay-800">
              Free 30-minute consultation • No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-white/20 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-slide-in-up">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Book Your Free Consultation</h3>
              <p className="text-gray-400">Let's discuss how we can automate your business</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:bg-white/10"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:bg-white/10"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:bg-white/10"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 hover:bg-white/10"
                />
              </div>
              
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-all duration-300 hover:bg-white/10 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-900 text-gray-400">Select Service of Interest</option>
                  <option value="full-automation-setup" className="bg-gray-900 text-white">Full Automation Setup</option>
                  <option value="website-creation" className="bg-gray-900 text-white">Website Creation</option>
                  <option value="crm-integration" className="bg-gray-900 text-white">CRM Integration</option>
                  <option value="ai-chatbot" className="bg-gray-900 text-white">AI Chatbot</option>
                  <option value="customer-support" className="bg-gray-900 text-white">Customer Support</option>
                  <option value="appointment-setting" className="bg-gray-900 text-white">Appointment Setting</option>
                  <option value="phone-callers" className="bg-gray-900 text-white">AI Phone Callers</option>
                  <option value="email-outreach" className="bg-gray-900 text-white">Email Outreach</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover-pop-button"
              >
                Book My Consultation
              </button>
            </form>

            <p className="text-sm text-gray-400 text-center mt-6">
              We'll respond within 2 hours during business hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CTASection;