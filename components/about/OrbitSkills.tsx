'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { techSkills } from '@/app/data/skills';
import { GiPolarStar } from 'react-icons/gi';

export default function OrbitSkills() {
    const [activeId, setActiveId] = useState<string | null>(null);

    const skills = useMemo(() => techSkills, []);

    const active = useMemo(
        () => skills.find((s) => s.id === activeId) ?? null,
        [skills, activeId]
    );

    const stars = useMemo(() => {
        return Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: 14 + (i * 71) % 72,
        top: 16 + (i * 43) % 68,
        dur: 2.4 + (i % 4) * 0.55,
        delay: (i % 6) * 0.22,
        }));
    }, []);

    const orbitRadius = (ring: 'tech' | 'design') => (ring === 'tech' ? 230 : 345);

    const ringStyle = (ring: 'tech' | 'design') => {
        return ring === 'tech'
        ? {
            bg: 'var(--light-teal)',
            border: 'var(--dark-teal)',
            tooltipBg: 'var(--dark-teal)',
            badge: 'var(--dark-teal)',
            }
        : {
            bg: 'var(--light-pink)',
            border: 'var(--dark-pink)',
            tooltipBg: 'var(--dark-pink)',
            badge: 'var(--dark-pink)',
            };
    };

    const levelDots = (level: number, color: string) => (
        <div className="flex gap-1 items-center">
        {Array.from({ length: 5 }).map((_, i) => (
            <span
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{
                background: i < level ? color : 'rgba(0,0,0,0.14)',
                border: `2px solid ${color}`,
            }}
            />
        ))}
        </div>
    );

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[700px] flex items-center justify-center">
        {/* Center planet */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute w-44 h-44 rounded-full flex items-center justify-center z-20"
            style={{
            width: 180,
            height: 180,
            }}
        >
            <img
            src="/about/Planet.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
            aria-hidden
            />
            <div className="relative text-center px-4">
            <div className="text-[28px] font-bold leading-tight" style={{ color: 'var(--light-neutral)' }}>
                Skills
            </div>
            <div className="text-[11px] font-bold tracking-widest" style={{ color: 'var(--light-pink)', opacity: 0.8 }}>
                ORBIT MAP
            </div>
            </div>
        </motion.div>

        {/* Skills orbiting */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
            className="absolute z-30 w-[330px] md:w-[410px] px-4"
            style={{ top: 'calc(50% + 128px)' }}
            aria-hidden={!active}
        >
            {active && (() => {
            const rs = ringStyle(active.ring);
            return (
                <div
                className="relative p-4"
                style={{
                    clipPath:
                    'polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 100% 86%, 96% 100%, 4% 100%, 0% 86%)',
                    background: 'rgba(255,255,255,0.78)',
                    border: '4px solid var(--dark-green)',
                    boxShadow: '0 22px 34px rgba(0,0,0,0.14)',
                    backdropFilter: 'blur(6px)',
                }}
                >
                {/* checker “header strip” */}
                <div
                    className="absolute left-0 right-0 top-0 h-8"
                    style={{
                    background:
                        'repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 12px, rgba(255,255,255,0.0) 12px 24px)',
                    borderBottom: '3px solid var(--dark-green)',
                    opacity: 0.55,
                    }}
                />

                {/* rivets */}
                {[
                    { left: 10, top: 10 },
                    { right: 10, top: 10 },
                    { left: 10, bottom: 10 },
                    { right: 10, bottom: 10 },
                ].map((pos, i) => (
                    <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                        ...(pos.left !== undefined ? { left: pos.left } : {}),
                        ...(pos.right !== undefined ? { right: pos.right } : {}),
                        ...(pos.top !== undefined ? { top: pos.top } : {}),
                        ...(pos.bottom !== undefined ? { bottom: pos.bottom } : {}),
                        background: 'rgba(255,255,255,0.8)',
                        border: '2px solid var(--dark-green)',
                    }}
                    />
                ))}

                <button
                    onClick={() => setActiveId(null)}
                    className="absolute right-7 top-0.5 text-[10px] font-bold px-2 py-1 rounded-full"
                    style={{
                    background: 'rgba(255,255,255,0.85)',
                    border: '2px dashed var(--dark-green)',
                    color: 'var(--dark-green)',
                    }}
                >
                    UNPIN
                </button>

                <div className="pt-8">
                    <div className="flex items-start gap-3">
                    <active.icon/>

                    <div className="min-w-0">
                        <div className="text-lg font-bold leading-tight" style={{ color: 'var(--dark-green)' }}>
                        {active.name}
                        </div>

                        <div className="mt-1 flex items-center gap-2">
                        {levelDots(active.level, rs.border)}
                        {typeof active.years === 'number' && (
                            <span
                            className="text-[10px] font-bold px-2 py-1 rounded-full"
                            style={{
                                background: 'rgba(255,255,255,0.8)',
                                border: `2px solid ${rs.border}`,
                                color: 'var(--dark-green)',
                            }}
                            >
                            {active.years} yrs
                            </span>
                        )}
                        </div>

                        <div className="mt-2 text-[11px] font-bold tracking-widest" style={{ color: rs.badge }}>
                        {active.ring === 'tech' ? 'TECH' : 'DESIGN'} • PINNED
                        </div>
                    </div>
                    </div>

                    <p className="text-sm mt-2" style={{ color: 'var(--dark-green)', opacity: 0.92 }}>
                    {active.detail}
                    </p>
                </div>
                </div>
            );
            })()}
        </motion.div>

        {/* Orbital rings */}
        {(["tech", "design"] as const).map((ring, i) => {
            const r = orbitRadius(ring);
            return (
            <motion.div
                key={ring}
                className="absolute rounded-full opacity-30"
                style={{
                width: `${r * 2}px`,
                height: `${r * 2}px`,
                border: "2px dashed",
                borderColor: ring === "tech" ? "var(--dark-neutral)" : "var(--dark-green)",
                }}
                animate={{ rotate: i === 0 ? 360 : -360 }}
                transition={{ duration: i === 0 ? 72 : 98, repeat: Infinity, ease: "linear" }}
            />
            );
        })}

        {/* Skills */}
        {skills.map((skill, index) => {
            const ring = skill.ring ?? "tech";
            const r = orbitRadius(ring);
            const rad = (skill.angle * Math.PI) / 180;
            const x = r * Math.cos(rad);
            const y = r * Math.sin(rad);

            const isActive = activeId === skill.id;

            const style = ringStyle(ring);

            const Icon = skill.icon;

            return (
            <motion.button
                key={skill.id}
                type="button"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, x, y }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.05, type: "spring", stiffness: 150, damping: 14 }}
                whileHover={{ scale: 1.16 }}
                whileFocus={{ scale: 1.16 }}
                onClick={() => setActiveId(isActive ? null : skill.id)}
                className="absolute z-10 rounded-full flex flex-col items-center justify-center select-none outline-none group"
                style={{
                width: ring === "tech" ? 92 : 78,
                height: ring === "tech" ? 92 : 78,
                background: style.bg,
                border: `4px solid ${style.border}`,
                borderRadius: index % 2 === 0
                    ? '50% 46% 54% 48%'
                    : '48% 52% 46% 54%',
                boxShadow: "0 14px 22px rgba(0,0,0,0.12)",
                cursor: "pointer",
                }}
                aria-pressed={isActive}
                aria-label={`${skill.name}. Click to pin details.`}
            >
                {/* Icon */}
                <Icon className={ring === "tech" ? "text-3xl" : "text-2xl"} style={{ color: "var(--dark-green)" }} />

                {/* Label */}
                <span className="text-[11px] font-bold mt-1 text-center leading-tight px-2" style={{ color: "var(--dark-green)" }}>
                {skill.name}
                </span>

                {/* Hover tooltip: show level/years */}
                <div
                className="absolute top-full mt-2 px-3 py-2 rounded-xl text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity"
                style={{
                    background: style.tooltipBg,
                    color: "white",
                    border: `2px solid ${style.border}`,
                    boxShadow: "0 16px 26px rgba(0,0,0,0.18)",
                }}
                >
                <div className="flex items-center gap-2">
                    <span>Level {skill.level}/5</span>
                    {typeof skill.years === "number" && <span style={{ opacity: 0.9 }}>• {skill.years} yrs</span>}
                </div>
                <div className="text-[10px]" style={{ opacity: 0.9 }}>
                    Click to pin
                </div>
                </div>

                {/* “PRESS” badge */}
                <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                    background: "rgba(255,255,255,0.85)",
                    border: `2px dashed ${style.border}`,
                    color: style.border,
                }}
                >
                PRESS
                </div>

                {isActive && (
                <div
                    className="absolute inset-[-6px] rounded-full"
                    style={{
                    background:
                        'repeating-radial-gradient(farthest-corner at 20% 20%, var(--dark-neutral) 0 4px, var(--dark-green), var(--dark-neutral) 4px, transparent 4px, transparent 8px)',
                    opacity: 0.25,
                    zIndex: -1,
                    }}
                />
                )}
            </motion.button>
            );
        })}

        {/* Floating stars decoration (stable positions) */}
        {stars.map((s) => (
            <motion.div
                key={s.id}
                className="absolute opacity-60 pointer-events-none"
                style={{
                    left: `${s.left}%`,
                    top: `${s.top}%`,
                    color: 'var(--dark-neutral)',
                }}
                animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.8, 0.35] }}
                transition={{ duration: s.dur, repeat: Infinity, delay: s.delay }}
            >
            <GiPolarStar />
            </motion.div>
        ))}
        </div>
    );
}