'use client';

import Image from 'next/image';
import ResumeCard from '@/components/resumes/ResumeCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-20">
        <Header />
      </div>

      {/* Header SVG */}
      <div
        className="mt-[-1rem] mb-2 flex justify-center"
      >
        <Image 
          src="/resumes/resumes.svg"
          alt="Resumes"
          width={1440}
          height={340}
          className="w-full h-auto"
        />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-8">
        {/* panels */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ResumeCard
            title="Creative Resume"
            blurb="A designed, personality-forward version that shows visual craft."
            previewSrc="/resumes/Creative.png"
            pdfHref="/resumes/Creative.pdf"
            accent="pink"
          />

          <ResumeCard
            title="ATS-Friendly Resume"
            blurb="A clean, recruiter-friendly format optimized for scanning."
            previewSrc="/resumes/ATS.png"
            pdfHref="/resumes/ATS.pdf"
            accent="teal"
          />
        </div>

        {/* footer note */}
        <div
          className="mt-10 text-center text-xs font-extrabold tracking-widest"
          style={{ color: 'rgba(0,0,0,0.55)' }}
        >
          TIP: “VIEW” opens in a new tab • “DOWNLOAD” saves the PDF
        </div>
      </main>

      <Footer />
    </div>
  );
}
