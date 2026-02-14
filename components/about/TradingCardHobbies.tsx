'use client';

import { motion } from 'framer-motion';
import { hobbiesData } from '@/app/data/hobbies';
import { PiStarFourFill } from 'react-icons/pi';

export default function LangSkills() {
    const accentVars = (accent: "teal" | "pink" | "green" | "neutral") => {
        if (accent === "teal")
        return { bg: "var(--light-teal)", border: "var(--dark-teal)", stripe: "var(--dark-teal)", fill: "var(--teal)" };
        if (accent === "pink")
        return { bg: "var(--light-pink)", border: "var(--dark-pink)", stripe: "var(--dark-pink)", fill: "var(--pink)" };
        if (accent === "green")
        return { bg: "var(--light-green)", border: "var(--dark-green)", stripe: "var(--dark-green)", fill: "var(--green)" };
        return { bg: "var(--light-neutral)", border: "var(--dark-neutral)", stripe: "var(--dark-neutral)", fill: "var(--neutral)" };
    };

    const statPips = (count: number, border: string, fill: string) => (
        <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <span
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{
                background: i < count ? fill : "rgba(255,255,255,0.25)",
                border: `2px solid ${border}`,
                boxShadow: i < count ? `0 0 10px ${border}` : "none",
            }}
            />
        ))}
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbiesData.map((hobby, index) => {
            const t = accentVars(hobby.accent);
            const Icon = hobby.icon;

            return (
            <motion.div
                key={hobby.id ?? hobby.name}
                initial={{ opacity: 0, y: 14, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 140, damping: 16 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 2.5 : -2.5 }}
                className="relative"
            >
                <div
                className="relative overflow-hidden"
                style={{
                    background: t.bg,
                    border: `5px solid ${t.border}`,
                    boxShadow: "0 18px 30px rgba(0,0,0,0.14)",
                    borderRadius: 26,
                    clipPath:
                    "polygon(0% 12%, 5% 0%, 95% 0%, 100% 12%, 100% 88%, 95% 100%, 5% 100%, 0% 88%)",
                }}
                >
                {/* checker header strip */}
                <div
                    className="absolute left-0 right-0 top-0 h-10"
                    style={{
                    background: `repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 12px, rgba(255,255,255,0) 12px 24px)`,
                    borderBottom: `4px solid ${t.border}`,
                    opacity: 0.55,
                    }}
                />

                {/* badges */}
                <div className="absolute left-3 top-1 flex items-center gap-2">
                    <div
                    className="text-[10px] font-bold px-2 py-1 rounded-full"
                    style={{
                        background: "rgba(255,255,255,0.78)",
                        border: `2px dashed ${t.border}`,
                        color: t.border,
                    }}
                    >
                    SERIES {hobby.year ?? "2026"}
                    </div>
                </div>

                <div className="absolute right-3 top-1">
                    <div
                    className="text-[10px] font-bold px-2 py-1 rounded-full"
                    style={{
                        background: "rgba(255,255,255,0.78)",
                        border: `2px solid ${t.border}`,
                        color: t.border,
                    }}
                    >
                    {hobby.rarity ?? "Common"}
                    </div>
                </div>

                {/* card content */}
                <div className="relative pt-14 pb-5 px-5 group cursor-pointer">
                    {/* big icon medallion */}
                    <div className="flex justify-center">
                    <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{
                        background: "rgba(255,255,255,0.55)",
                        border: `4px solid ${t.border}`,
                        boxShadow: "0 10px 18px rgba(0,0,0,0.12)",
                        }}
                    >
                        <Icon className="text-4xl" style={{ color: "var(--dark-green)" }} />
                    </div>
                    </div>

                    <div className="mt-4 text-center">
                    <h3
                        className="font-bold"
                        style={{
                        fontFamily: "var(--font-pacifico)",
                        color: t.border,
                        fontSize: "clamp(1.35rem, 2.1vw, 1.65rem)",
                        lineHeight: 1.15,
                        }}
                    >
                        {hobby.name}
                    </h3>

                    {/* description: appears on hover */}
                    <div
                        className="mt-3 text-small opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                        color: "var(--dark-green)",
                        lineHeight: 1.35,
                        }}
                    >
                        {hobby.description}
                    </div>
                    </div>

                    {/* stats + “card footer” */}
                    <div className="mt-4">
                    <div
                        className="rounded-2xl px-3 py-3"
                        style={{
                        background: "rgba(255,255,255,0.40)",
                        border: `2px solid ${t.border}`,
                        }}
                    >
                        <div className="flex items-center justify-between">
                        <div className="text-[10px] font-bold tracking-widest" style={{ color: t.border }}>
                            STATS
                        </div>
                        <div className="text-[10px] font-bold tracking-widest" style={{ color: "var(--dark-green)", opacity: 0.8 }}>
                            HT TRADING CARD
                        </div>
                        </div>

                        <div className="mt-2 space-y-2">
                        {(hobby.stats ?? []).slice(0, 2).map((s) => (
                            <div key={s.label} className="flex items-center justify-between gap-3">
                            <div className="text-[11px] font-bold" style={{ color: "var(--dark-green)" }}>
                                {s.label.toUpperCase()}
                            </div>
                            {statPips(s.value, t.border, t.fill)}
                            </div>
                        ))}
                        </div>

                        {/* hover hint */}
                        <div
                        className="mt-3 text-[10px] font-bold tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{ color: t.border }}
                        >
                        HOVER TO REVEAL <PiStarFourFill />
                        </div>
                    </div>
                    </div>
                </div>

                {/* corner “shine” */}
                <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
                    style={{
                    background: "rgba(255,255,255,0.22)",
                    transform: "rotate(18deg)",
                    }}
                />
                </div>
            </motion.div>
            );
        })}
        </div>
    );
}