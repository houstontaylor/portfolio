import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socials = [
    { 
      name: "LinkedIn", 
      icon: FaLinkedin, 
      color: "bg-light-teal", 
      border: "border-dark-teal",
      textColor: "var(--dark-teal)",
      url: "https://linkedin.com/in/yourprofile" 
    },
    { 
      name: "GitHub", 
      icon: FaGithub, 
      color: "bg-light-pink", 
      border: "border-dark-pink",
      textColor: "var(--dark-pink)",
      url: "https://github.com/yourusername" 
    },
    { 
      name: "Dribbble", 
      icon: FaDribbble, 
      color: "bg-light-green", 
      border: "border-dark-green",
      textColor: "var(--dark-green)",
      url: "https://dribbble.com/yourusername" 
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col h-full px-6 py-4 mt-4 mr-6">
      <div className="flex-1 grid grid-cols-2 gap-4">
        {/* LEFT COLUMN - Header SVG + Social Buttons */}
        <div className="flex flex-col justify-between">
          {/* Header SVG */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex justify-center items-start"
          >
            <Image 
              src="/contact/contact.svg"
              alt="Contact header"
              width={400}
              height={200}
              className="w-full h-auto mt-8"
            />
          </motion.div>

          {/* Social Buttons - Bottom of left column */}
          <div className="flex flex-col gap-5">
            <p className="text-small font-bold uppercase tracking-wider opacity-80 text-center">
              Connect With Me
            </p>
            <div className="flex gap-3 justify-center mb-6">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} ${social.border} border-3 rounded-xl w-16 h-16 flex items-center justify-center cursor-pointer group relative overflow-hidden`}
                    title={social.name}
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-bl-lg"></div>
                    
                    {/* Atomic sparkle decoration */}
                    <div className="absolute bottom-1 left-1 opacity-20">
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="1" fill="currentColor"/>
                        {[0, 90, 180, 270].map((angle, i) => (
                          <line
                            key={i}
                            x1="6"
                            y1="6"
                            x2={6 + 4 * Math.cos((angle * Math.PI) / 180)}
                            y2={6 + 4 * Math.sin((angle * Math.PI) / 180)}
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        ))}
                      </svg>
                    </div>

                    {/* Icon */}
                    <Icon 
                      className="text-2xl group-hover:scale-110 transition-transform" 
                      style={{ color: social.textColor }}
                    />

                    {/* Hover tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.name}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-neutral/40 border-3 border-dark-neutral rounded-2xl p-4 relative overflow-hidden flex flex-col mt-6"
        >
          {/* Decorative starburst */}
          <div className="absolute top-2 right-2 opacity-10">
            <svg width="35" height="35" viewBox="0 0 35 35">
              <circle cx="17.5" cy="17.5" r="3" fill="currentColor"/>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="17.5"
                  y1="17.5"
                  x2={17.5 + 12 * Math.cos((angle * Math.PI) / 180)}
                  y2={17.5 + 12 * Math.sin((angle * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          {/* Decorative circles */}
          <div className="absolute bottom-3 left-3 flex gap-1 opacity-20">
            <div className="w-2 h-2 bg-dark-neutral rounded-full"></div>
            <div className="w-2 h-2 bg-dark-neutral rounded-full"></div>
            <div className="w-2 h-2 bg-dark-neutral rounded-full"></div>
          </div>

          <h3 className="text-base font-bold mb-3 text-center" style={{ color: 'var(--dark-neutral)' }}>
            Drop me a line!
          </h3>

          <div className="space-y-2.5 flex-1">
            {/* Name Input */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider opacity-70 block mb-1">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/50 border-2 border-dark-neutral rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-dark-teal focus:bg-white/70 transition-all"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider opacity-70 block mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/50 border-2 border-dark-neutral rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-dark-teal focus:bg-white/70 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="flex-1 flex flex-col">
              <label className="text-xs font-bold uppercase tracking-wider opacity-70 block mb-1">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="flex-1 w-full bg-white/50 border-2 border-dark-neutral rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-dark-teal focus:bg-white/70 transition-all resize-none"
                placeholder="Say hello!"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-teal border-2 border-dark-teal rounded-full py-2 text-sm font-bold uppercase tracking-wider text-white hover:bg-dark-teal transition-colors relative overflow-hidden group"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Send Message ✉️</span>
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Bottom CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center mt-8 relative"
      >
        {/* Decorative arrows */}
        <motion.div 
          className="absolute left-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 15 10 L 5 5 L 5 15 Z" fill="var(--teal)" opacity="0.4"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute right-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 5 10 L 15 5 L 15 15 Z" fill="var(--teal)" opacity="0.4"/>
          </svg>
        </motion.div>

        <div className="inline-block bg-teal/30 border-2 border-dark-teal rounded-full px-6 py-2 cursor-pointer hover:bg-teal/50 transition-colors">
          <p className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--dark-teal)' }}>
            More Ways to Connect →
          </p>
        </div>
      </motion.div>

      {/* Retro scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5 bg-gradient-to-b from-transparent via-black to-transparent bg-[length:100%_4px] animate-[scan_8s_linear_infinite]"
        style={{
          clipPath: 'ellipse(48% 45% at 50% 50%)',
          borderRadius: '8px'
        }}
      />
    </div>
  );
}