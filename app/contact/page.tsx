'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculate "fuel level" based on filled fields
  const calculateFuelLevel = () => {
    const fields = Object.values(formData);
    const filledFields = fields.filter(field => field.trim() !== '').length;
    return Math.round((filledFields / fields.length) * 5);
  };

  const fuelLevel = calculateFuelLevel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with your actual email service
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitSuccess(false);
    }, 3000);
  };

  const socials = [
    { 
      name: "LinkedIn", 
      icon: FaLinkedin, 
      color: "bg-light-teal", 
      border: "border-dark-teal",
      textColor: "var(--dark-teal)",
      url: "https://www.linkedin.com/in/houston-taylor/" 
    },
    { 
      name: "GitHub", 
      icon: FaGithub, 
      color: "bg-light-pink", 
      border: "border-dark-pink",
      textColor: "var(--dark-pink)",
      url: "https://github.com/houstontaylor" 
    },
    { 
      name: "Email", 
      icon: FaEnvelope, 
      color: "bg-light-green", 
      border: "border-dark-green",
      textColor: "var(--dark-green)",
      url: "mailto:houstonctaylor@alumni.stanford.edu" 
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      <ScrollToTop />

      {/* Floating space decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ✨
          </motion.div>
        ))}

        {/* Floating planets */}
        <motion.div
          className="absolute top-20 right-20 text-6xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: 360 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🪐
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-5xl opacity-30"
          animate={{ 
            y: [0, 20, 0],
            rotate: -360 
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🌙
        </motion.div>
      </div>
      
      <main className="pt-8 pb-8 px-8 max-w-6xl mx-auto relative z-10">
        {/* Header SVG */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-12 flex justify-center"
        >
          <Image 
            src="/contact.svg"
            alt="Contact"
            width={800}
            height={200}
            className="w-2/3 h-auto"
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes up 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-dark-teal to-teal border-4 border-dark-green rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Mission Control Title */}
              <div className="flex items-center gap-3 mb-6">
                <motion.span 
                  className="text-4xl"
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  🚀
                </motion.span>
                <h2 className="text-3xl font-bold text-white">
                  Launch a Message
                </h2>
              </div>

              {/* Decorative control panel lines */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 20}
                      x2="100"
                      y2={i * 20}
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/90 mb-2">
                    Commander Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/90 border-3 border-dark-green rounded-xl focus:outline-none focus:bg-white focus:border-green focus:shadow-lg transition-all text-lg"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/90 mb-2">
                    Transmission ID (Email)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/90 border-3 border-dark-green rounded-xl focus:outline-none focus:bg-white focus:border-green focus:shadow-lg transition-all text-lg"
                    placeholder="your.email@space.com"
                    required
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/90 mb-2">
                    Mission Objective
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-white/90 border-3 border-dark-green rounded-xl focus:outline-none focus:bg-white focus:border-green focus:shadow-lg transition-all text-lg"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/90 mb-2">
                    Message Contents
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/90 border-3 border-dark-green rounded-xl focus:outline-none focus:bg-white focus:border-green focus:shadow-lg transition-all text-lg resize-none"
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>

                {/* Fuel Level Indicator */}
                <div className="flex items-center gap-4 py-2">
                  <span className="text-sm font-bold uppercase tracking-wider text-white/90">
                    Fuel Status:
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <motion.div
                        key={level}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: level <= fuelLevel ? 1 : 0.3,
                          backgroundColor: level <= fuelLevel ? '#A0A63A' : '#ffffff40'
                        }}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white/90 ml-2">
                    {fuelLevel === 5 ? '🚀 Ready for Launch!' : '⏳ Preparing...'}
                  </span>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green border-4 border-dark-green rounded-full py-4 text-xl font-bold uppercase tracking-wider text-white shadow-lg hover:bg-light-green hover:shadow-2xl transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting && (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        🌀
                      </motion.span>
                    )}
                    {submitSuccess ? '✅ Message Sent!' : isSubmitting ? 'Launching...' : '🚀 Send to Orbit!'}
                  </span>
                </motion.button>
              </form>

              {/* Success Animation */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-green/95 rounded-3xl"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ 
                          y: [0, -20, -100, -200],
                          opacity: [1, 1, 1, 0]
                        }}
                        transition={{ duration: 2 }}
                        className="text-8xl mb-4"
                      >
                        🚀
                      </motion.div>
                      <h3 className="text-4xl font-bold text-white mb-2">
                        Message Launched!
                      </h3>
                      <p className="text-xl text-white/90">
                        I'll get back to you soon! 🌟
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Social Links - Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Mission Control Title */}
            <div className="bg-neutral/60 border-3 border-dark-neutral rounded-2xl p-4 text-center">
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--dark-neutral)' }}>
                Mission Control
              </h3>
              <p className="text-sm opacity-80">
                Find me across the galaxy
              </p>
            </div>

            {/* Social Cards */}
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: index % 2 === 0 ? 3 : -3,
                    y: -5
                  }}
                  className={`block ${social.color} ${social.border} border-4 rounded-2xl p-6 cursor-pointer group relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow`}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/30 rounded-bl-2xl"></div>

                  {/* Orbit decoration */}
                  <div className="absolute -bottom-4 -right-4 opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <Icon 
                      className="text-5xl mb-3 group-hover:scale-110 transition-transform" 
                      style={{ color: social.textColor }}
                    />
                    <h4 
                      className="text-xl font-bold group-hover:scale-105 transition-transform origin-left"
                      style={{ color: social.textColor }}
                    >
                      {social.name}
                    </h4>
                    <p className="text-sm opacity-70 mt-1">
                      Connect with me
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <motion.div 
                    className="absolute bottom-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: social.textColor }}
                  >
                    →
                  </motion.div>
                </motion.a>
              );
            })}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-light-pink/60 border-3 border-dark-pink rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 text-2xl">
                ⏰
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--dark-pink)' }}>
                Response Time
              </h4>
              <p className="text-sm opacity-90">
                Usually within 24-48 hours during Earth business days 🌍
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}