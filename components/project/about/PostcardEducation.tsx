'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { educationData } from '@/app/data/education';
import Image from 'next/image';

export default function PostcardEducation() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    return (
        <div className="hidden md:block relative h-[520px]">
            {educationData.map((edu, index) => {
            const isFlipped = flippedCard === index;
            const t = edu.theme;

            // positions + rotations for the 3 cards
            const layout = [
                { left: '35%',  top: '10px',  rotate: -4, z: 20 }, // Bachelor's
                { left: '1%', top: '120px',  rotate: 3,  z: 30 }, // Master's
                { left: '68%', top: '180px', rotate: -2,  z: 10 }, // Paris
            ][index] ?? { left: `${index * 30}%`, top: '80px', rotate: 0, z: 10 };

            return (
                <motion.div
                key={index}
                className="absolute"
                style={{
                    left: layout.left,
                    top: layout.top,
                    width: '400px',
                    zIndex: isFlipped ? 40 : layout.z,
                    perspective: '1200px',
                }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08 }}
                >
                <motion.div
                    className="relative cursor-pointer"
                    style={{
                    width: '100%',
                    aspectRatio: '3 / 2',
                    transformStyle: 'preserve-3d',
                    }}
                    animate={{
                    rotate: layout.rotate,                 // the -3/0/3 tilt
                    rotateY: isFlipped ? 180 : 0,           // the flip
                    }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setFlippedCard(isFlipped ? null : index)}
                >
                    {/* FRONT */}
                    <div
                    className="absolute inset-0"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                    >
                    <div
                        className="relative w-full h-full"
                        style={{ filter: 'drop-shadow(0 18px 22px rgba(0,0,0,0.18))' }}
                    >
                        <Image
                        src={edu.postcard}
                        alt={`${edu.school} postcard`}
                        fill
                        className="object-contain"
                        sizes="360px"
                        priority={index === 1}
                        />

                        {!isFlipped && (
                        <div
                            className="absolute right-3 top-3 text-[10px] font-bold px-2 py-1 rounded-full"
                            style={{
                            background: 'rgba(255,255,255,0.75)',
                            border: `2px dashed ${t.chipBorder}`,
                            color: t.chipBorder,
                            }}
                        >
                            FLIP
                        </div>
                        )}
                    </div>
                    </div>

                    {/* BACK */}
                    <div
                    className="absolute inset-0 backface-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                    >
                    <div
                        className="w-full h-full rounded-2xl p-5 overflow-auto retro-scroll"
                        style={{
                        background: t.bg,
                        border: `4px solid ${t.border}`,
                        boxShadow: '0 18px 22px rgba(0,0,0,0.18)',

                        "--scroll-track": t.scrollTrack,
                        "--scroll-thumb": t.scrollThumb,
                        "--scroll-thumb-hover": t.scrollThumbHover,
                        } as React.CSSProperties}
                    >
                        <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                            <h3 className="font-bold leading-tight" style={{ color: t.accent }}>
                            {edu.school}
                            </h3>
                            <p className="text-sm opacity-80">{edu.location}</p>
                        </div>

                        <div
                            className="shrink-0 text-[11px] font-bold px-3 py-1 rounded-full"
                            style={{
                            background: t.chipBg,
                            border: `2px dashed ${t.chipBorder}`,
                            color: t.chipBorder,
                            }}
                        >
                            {edu.year}
                        </div>
                        </div>

                        <p className="text-sm mb-1">
                        <span className="font-bold">{edu.degree}</span>
                        </p>
                        <p className="text-sm mb-3 opacity-90">
                        Focus: <span className="font-bold">{edu.focus}</span>
                        </p>

                        {edu.description && (
                        <p className="text-sm leading-relaxed mb-4 opacity-90">
                            {edu.description}
                        </p>
                        )}

                        <div className="mb-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: t.accent }}>
                            Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                            <span
                                key={course}
                                className="px-2 py-1 rounded-full text-[11px]"
                                style={{
                                background: t.chipBg,
                                border: `1px solid ${t.chipBorder}`,
                                color: t.chipBorder,
                                }}
                            >
                                {course}
                            </span>
                            ))}
                        </div>
                        </div>

                        {edu.clubs.length > 0 && (
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: t.accent }}>
                            Clubs & Activities
                            </h4>
                            <div className="flex flex-wrap gap-2">
                            {edu.clubs.map((club) => (
                                <span
                                key={club}
                                className="px-2 py-1 rounded-full text-[11px]"
                                style={{
                                    background: t.chipBg,
                                    border: `1px solid ${t.chipBorder}`,
                                    color: t.chipBorder,
                                }}
                                >
                                {club}
                                </span>
                            ))}
                            </div>
                        </div>
                        )}
                    </div>
                    </div>
                </motion.div>
                </motion.div>
            );
            })}
        </div>
    );
}