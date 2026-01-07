'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollToTop />

      <div className="max-w-5xl mx-auto pt-8">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Resume
        </motion.h1>

        <motion.p
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose your preferred format below
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Themed Resume */}
          <motion.div
            className="bg-dark-neutral p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-red">Creative Resume</h2>
            <p className="mb-6 text-gray-300">
              A visually designed resume showcasing my personality and design skills
            </p>
            
            <div className="mb-6 border-2 border-gray-700 rounded overflow-hidden">
              <Image 
                src="/resume-creative-preview.png"
                alt="Creative Resume Preview"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <a 
              href="/houston-taylor-resume-creative.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <motion.button
                className="w-full bg-red text-white font-bold py-3 px-6 rounded"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Creative Resume
              </motion.button>
            </a>
          </motion.div>

          {/* ATS-Friendly Resume */}
          <motion.div
            className="bg-dark-neutral p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-red">ATS-Friendly Resume</h2>
            <p className="mb-6 text-gray-300">
              A clean, professional format optimized for applicant tracking systems
            </p>
            
            <div className="mb-6 border-2 border-gray-700 rounded overflow-hidden">
              <Image 
                src="/resume-ats-preview.png"
                alt="ATS Resume Preview"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <a 
              href="/houston-taylor-resume-ats.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <motion.button
                className="w-full bg-red text-white font-bold py-3 px-6 rounded"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View ATS Resume
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}