'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { IoRocket } from 'react-icons/io5';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const useStableStars = (count: number) => {
    return useMemo(() => {
      return Array.from({ length: count }).map((_, i) => {
        // deterministic “random”
        const left = (i * 73) % 100;
        const top = (i * 41) % 100;
        const size = 1 + (i % 3); // 1..3
        const dur = 2.4 + (i % 5) * 0.55;
        const delay = (i % 7) * 0.25;

        return { id: i, left, top, size, dur, delay };
      });
    }, [count]);
  };
  const stars = useStableStars(26);

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

    // TODO - replace with actual email service
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
      <div className="relative z-20">
        <Header />
      </div>
      <ScrollToTop />

      {/* Floating space decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* soft nebula-ish gradients */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `
              radial-gradient(circle at 18% 22%, rgba(0,127,126,0.20), transparent 42%),
              radial-gradient(circle at 76% 28%, rgba(231,70,86,0.18), transparent 46%),
              radial-gradient(circle at 58% 78%, rgba(200,154,92,0.20), transparent 52%),
              radial-gradient(circle at 40% 62%, rgba(160,166,58,0.14), transparent 50%)
            `,
          }}
        />

        {/* starfield */}
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size * 2,
              height: s.size * 2,
              background: "rgba(255,255,255,0.85)",
              boxShadow: "0 0 10px rgba(255,255,255,0.35)",
              opacity: 0.65,
            }}
            animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.25, 1] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
            aria-hidden="true"
          />
        ))}

        {/* big atomic rings (super subtle) */}
        <motion.div
          className="absolute -left-48 top-24 w-[520px] h-[520px] rounded-full"
          style={{ border: "3px dashed rgba(231,70,86,0.22)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -right-56 bottom-16 w-[640px] h-[640px] rounded-full"
          style={{ border: "3px dashed rgba(0,127,126,0.18)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />

        {/* one “planet” as an SVG circle (not emoji) */}
        <motion.div
          className="absolute right-12 top-28 opacity-35"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="36" fill="rgba(223,206,163,0.85)" stroke="rgba(110,99,54,0.6)" strokeWidth="4" />
            <path d="M18 64 C 44 44, 74 42, 92 54" fill="none" stroke="rgba(231,70,86,0.55)" strokeWidth="6" strokeLinecap="round" />
            <path d="M20 72 C 46 54, 76 52, 90 62" fill="none" stroke="rgba(0,127,126,0.45)" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
      
      <main className="pt-8 pb-8 px-8 max-w-6xl mx-auto relative z-10">
        {/* Header SVG */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-4 flex justify-center"
        >
          <Image 
            src="/contact/contact.svg"
            alt="Contact"
            width={800}
            height={200}
            className="w-3/5 h-auto"
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {/* Contact Form - Takes up 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {(() => {
              const SAFE = { left: "12%", top: "9%", width: "67%", height: "59%" };

              const inputStyle: React.CSSProperties = {
                background: "rgba(from var(--dark-teal) r g b / 0.55)",
                border: "3px solid rgba(from var(--dark-teal) r g b / 0.80)",
                color: "rgba(from var(--light-neutral) r g b / 0.95)",
                boxShadow: "0 10px 18px rgba(0,0,0,0.18)",
                backdropFilter: "blur(6px)",
              };

              const labelStyle: React.CSSProperties = {
                color: "rgba(from var(--dark-pink) r g b / 0.95)",
                letterSpacing: "0.12em",
                fontWeight: 800,
                fontSize: 12,
              };

              return (
                <div className="relative w-full max-w-[980px] mx-auto">
                  {/* SVG frame */}
                  <div className="relative w-full">
                    <Image
                      src="/contact/contactScreen.svg"
                      alt=""
                      width={900}
                      height={650}
                      className="w-full h-auto select-none"
                      priority={false}
                    />

                    {/* Form overlay inside safe area */}
                    <div
                      className="absolute"
                      style={{
                        left: SAFE.left,
                        top: SAFE.top,
                        width: SAFE.width,
                        height: SAFE.height,
                      }}
                    >
                      <div className="h-full flex flex-col">
                        {/* Title row */}
                        <div className="flex items-center gap-3 mb-4">
                          <motion.span
                            className="text-3xl"
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            aria-hidden="true"
                          >
                            <IoRocket color='var(--green)'/>
                          </motion.span>

                          <h2
                            className="font-bold"
                            style={{
                              fontFamily: "var(--font-pacifico)",
                              color: "var(--dark-green)",
                              fontSize: "clamp(1.35rem, 2.2vw, 2.05rem)",
                              lineHeight: 1,
                              textShadow: "0 6px 18px rgba(0,0,0,0.22)",
                            }}
                          >
                            Launch a Message
                          </h2>
                        </div>

                        {/* Form */}
                        <form
                          onSubmit={handleSubmit}
                          className="flex-1 flex flex-col"
                          style={{ gap: 12 }}
                        >
                          <div>
                            <label style={labelStyle} className="block mb-1">
                              COMMANDER NAME
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl focus:outline-none transition-all"
                              style={inputStyle}
                              placeholder="Your name"
                              required
                            />
                          </div>

                          <div>
                            <label style={labelStyle} className="block mb-1">
                              TRANSMISSION ID (EMAIL)
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl focus:outline-none transition-all"
                              style={inputStyle}
                              placeholder="your.email@space.com"
                              required
                            />
                          </div>

                          <div>
                            <label style={labelStyle} className="block mb-1">
                              MISSION OBJECTIVE
                            </label>
                            <input
                              type="text"
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl focus:outline-none transition-all"
                              style={inputStyle}
                              placeholder="What's this about?"
                              required
                            />
                          </div>

                          <div className="flex-1 flex flex-col">
                            <label style={labelStyle} className="block mb-1">
                              MESSAGE CONTENTS
                            </label>
                            <textarea
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl focus:outline-none transition-all resize-none flex-1"
                              style={inputStyle}
                              placeholder="Your message here..."
                              rows={4}
                              required
                            />
                          </div>

                          {/* Fuel row */}
                          <div className="flex items-center gap-3 pt-1">
                            <span className="text-[11px] font-extrabold tracking-widest" style={{ color: "rgba(from var(--dark-pink) r g b / 0.82)" }}>
                              FUEL STATUS:
                            </span>

                            <div className="flex gap-2">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <motion.div
                                  key={level}
                                  initial={{ scale: 0 }}
                                  animate={{
                                    scale: level <= fuelLevel ? 1 : 0.35,
                                    backgroundColor: level <= fuelLevel ? "var(--green)" : "rgba(from var(--green) r g b / 0.18)",
                                  }}
                                  className="w-4 h-4 rounded-full"
                                  style={{
                                    border: "2px solid rgba(from var(--dark-pink) r g b / 0.75)",
                                    boxShadow: level <= fuelLevel ? "0 0 10px rgba(0,0,0,0.35)" : "none",
                                  }}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>

                            <span className="text-[11px] font-bold ml-2" style={{ color: "rgba(from var(--dark-pink) r g b / 0.78)" }}>
                              {fuelLevel === 5 ? "Ready!" : "Preparing…"}
                            </span>
                          </div>

                          {/* Submit */}
                          <motion.button
                            type="submit"
                            disabled={isSubmitting || submitSuccess}
                            whileHover={{ scale: 1.01, boxShadow: "0 12px 24px rgba(0,0,0,0.22)", cursor: isSubmitting || submitSuccess ? "not-allowed" : "pointer" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full rounded-full py-3 font-extrabold tracking-widest shadow-lg transition-all relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                              background: "var(--green)",
                              border: "3px solid var(--dark-green)",
                              color: "rgba(255,255,255,0.95)",
                            }}
                          >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                              {submitSuccess ? "✅ MESSAGE SENT!" : isSubmitting ? "LAUNCHING..." : "SEND TO ORBIT!"}
                            </span>
                          </motion.button>
                        </form>

                        {/* Success overlay */}
                        <AnimatePresence>
                          {submitSuccess && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              className="absolute inset-0 flex items-center justify-center"
                              style={{
                                background: "rgba(from var(--dark-pink) r g b / 0.92)",
                                borderRadius: 18,
                              }}
                            >
                              <div className="text-center">
                                <div className="text-6xl mb-3" aria-hidden="true"><IoRocket className="inline-block" style={{ color: "var(--dark-green)" }} /></div>
                                <div className="text-2xl font-extrabold text-white">Message Launched!</div>
                                <div className="text-sm text-white/90 mt-1">I’ll get back to you soon.</div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>

          {/* Social Links - Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative flex justify-center"
          >
            {(() => {
              const PANEL = { left: "15%", top: "7.5%", width: "70%", height: "78.5%" };

              return (
                <div className="relative">
                  <Image
                    src="/contact/contactSidebar.svg"
                    alt=""
                    width={260}
                    height={760}
                    className="select-none"
                    priority={false}
                  />

                  <div
                    className="absolute"
                    style={{
                      left: PANEL.left,
                      top: PANEL.top,
                      width: PANEL.width,
                      height: PANEL.height,
                      pointerEvents: "auto",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Header */}
                    <div className="text-center">
                      <div
                        className="font-bold"
                        style={{
                          fontFamily: "var(--font-pacifico)",
                          color: "var(--dark-neutral)",
                          fontSize: "clamp(1.05rem, 1.5vw, 1.45rem)",
                          lineHeight: 1.05,
                        }}
                      >
                        Mission Control
                      </div>
                      <div
                        className="mt-1 text-[11px] font-extrabold tracking-widest"
                        style={{ color: "var(--dark-green)", opacity: 0.78 }}
                      >
                        FIND ME ACROSS THE GALAXY
                      </div>

                      <div
                        className="mx-auto mt-2 h-[2px] w-[60%]"
                        style={{ background: "rgba(110,99,54,0.22)" }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Socials (spread in the middle) */}
                    <div
                      className="flex-1 flex flex-col items-center justify-center"
                      style={{ gap: 85 }}
                    >
                      {socials.map((social, index) => {
                        const Icon = social.icon;

                        return (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 + index * 0.08 }}
                            whileHover={{ y: -2, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative"
                            aria-label={social.name}
                            title={social.name}
                            style={{ 
                              pointerEvents: "auto",
                              paddingTop: index === 1 ? 10 : 0
                            }}
                          >
                            {/* Icon orb */}
                            <div
                              className="flex items-center justify-center rounded-full"
                              style={{
                                width: 64,
                                height: 64,
                                background: "rgba(238,224,179,0.82)", // light-neutral glass
                                border: `4px solid ${social.textColor}`,
                                boxShadow: "0 14px 24px rgba(0,0,0,0.16)",
                                backdropFilter: "blur(6px)",
                              }}
                            >
                              <Icon
                                style={{ color: social.textColor }}
                                className="text-[28px] group-hover:scale-110 transition-transform"
                                aria-hidden="true"
                              />
                            </div>

                            {/* Optional micro label (keeps things compact + centered in oval) */}
                            <div
                              className="mt-1 text-center text-[11px] font-extrabold tracking-widest"
                              style={{ color: "rgba(238,224,179,0.92)", textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
                            >
                              {social.name.toUpperCase()}
                            </div>

                            {/* Tiny hover arrow */}
                            <motion.div
                              className="absolute -right-5 top-1/2 -translate-y-1/2 text-lg opacity-0 group-hover:opacity-100"
                              style={{ color: social.textColor }}
                              aria-hidden="true"
                            >
                              →
                            </motion.div>
                          </motion.a>
                        );
                      })}
                    </div>

                    {/* Bottom note pinned to the bottom */}
                    <div className="text-center">
                      <div
                        className="font-bold"
                        style={{
                          fontFamily: "var(--font-pacifico)",
                          color: "var(--dark-neutral)",
                          fontSize: "clamp(1.05rem, 1.5vw, 1.45rem)",
                          lineHeight: 1.05,
                          marginTop: 10,
                        }}
                      >
                        Response Time
                      </div>
                      <div
                        className="mt-1 text-[11px] font-extrabold tracking-widest"
                        style={{ color: "var(--dark-green)", opacity: 0.78 }}
                      >
                        Usually within 24–48 <br />hours.
                      </div>

                      <div
                        className="mx-auto mt-2 h-[2px] w-[40%]"
                        style={{ background: "rgba(110,99,54,0.22)" }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}