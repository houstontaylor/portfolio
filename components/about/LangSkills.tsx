'use client';

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { languageSkills } from "@/app/data/skills";

export default function LangSkills() {
    const langs = useMemo(() => languageSkills.slice(0, 4), []); // four buttons
    const [selectedId, setSelectedId] = useState<string>(langs[0]?.id ?? "");

    const selected = useMemo(
        () => langs.find((l) => l.id === selectedId) ?? langs[0],
        [langs, selectedId]
    );

    const SCREEN = { left: "24%", top: "28%", width: "52%", height: "34%" };

    const BUTTONS = [
        { left: "31%", top: "85.5%" },
        { left: "44%", top: "85.5%" },
        { left: "57%", top: "85.5%" },
        { left: "70%", top: "85.5%" },
    ];

    const levelDots = (level: number) => (
        <div className="flex gap-1 justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
            <span
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{
                background: i < level ? "rgba(255, 219, 92, 0.95)" : "rgba(255,255,255,0.35)",
                border: "2px solid var(--dark-pink)",
                boxShadow: i < level ? "0 0 10px rgba(255, 219, 92, 0.45)" : "none",
            }}
            />
        ))}
        </div>
    );

    const Icon = selected?.icon;

    return (
        <div className="w-full">
        <div className="relative mx-auto w-full max-w-[860px]">
            {/* Jukebox SVG */}
            <Image
            src="/about/Jukebox.svg"
            alt=""
            width={856}
            height={470}
            className="w-full select-none"
            priority={false}
            />

            {/* Screen overlay */}
            <div
            className="absolute"
            style={{
                left: SCREEN.left,
                top: SCREEN.top,
                width: SCREEN.width,
                height: SCREEN.height,
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            {/* subtle “glass” texture */}
            <div
                className="absolute inset-0"
                style={{
                opacity: 0.16,
                background:
                    "repeating-linear-gradient(180deg, rgba(255,255,255,0.22) 0 2px, rgba(255,255,255,0) 2px 6px)",
                mixBlendMode: "overlay",
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                opacity: 0.22,
                background:
                    "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.35), rgba(255,255,255,0) 62%)",
                mixBlendMode: "screen",
                }}
            />

            {/* Sound-wave sweep transition on selection change */}
            <motion.div
                key={`wave-${selected?.id}`}
                className="absolute"
                style={{
                left: "6%",
                right: "6%",
                top: "14%",
                height: "22%",
                opacity: 0.8,
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: [0, 1, 0], y: [8, 0, -6] }}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <svg viewBox="0 0 600 120" className="w-full h-full" aria-hidden="true">
                <path
                    d="M0,70 C40,20 80,110 120,70 C160,30 200,110 240,70 C280,25 320,110 360,70 C400,35 440,110 480,70 C520,25 560,95 600,70"
                    fill="none"
                    stroke="var(--dark-pink)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    opacity="0.55"
                />
                <path
                    d="M0,70 C40,20 80,110 120,70 C160,30 200,110 240,70 C280,25 320,110 360,70 C400,35 440,110 480,70 C520,25 560,95 600,70"
                    fill="none"
                    stroke="rgba(255, 219, 92, 0.95)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.75"
                />
                </svg>
            </motion.div>

            {/* Screen text */}
            <motion.div
                key={selected?.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="w-full text-center"
                style={{
                color: "var(--dark-green)",
                textShadow: "0 2px 10px rgba(0,0,0,0.28)",
                padding: "10px 12px",
                }}
            >
                {/* Heading */}
                <div className="flex items-center justify-center gap-3">
                {Icon && <Icon className="text-4xl" style={{ color: "var(--dark-green)" }} />}
                <div
                    className="font-bold leading-tight"
                    style={{
                    fontFamily: "var(--font-pacifico)",
                    color: "var(--dark-green)",
                    fontSize: "clamp(2.0rem, 3.0vw, 2.6rem)", // bigger heading
                    lineHeight: 1.05,
                    }}
                >
                    {selected?.name}
                </div>
                </div>

                {/* little jukebox label */}
                <div
                className="mt-2 font-bold tracking-widest"
                style={{
                    fontSize: "clamp(0.7rem, 1.0vw, 0.9rem)",
                    opacity: 0.8,
                    color: "var(--dark-pink)",
                }}
                >
                {selected?.proficiency}
                </div>

                {/* Level */}
                <div className="mt-2">{levelDots(selected?.level ?? 0)}</div>

                {/* Detail */}
                <div
                className="mt-3"
                style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                    lineHeight: 1.3,
                    opacity: 0.95,
                }}
                >
                {selected?.detail}
                </div>

                {!!selected?.tags?.length && (
                <div
                    className="mt-3 font-bold tracking-widest"
                    style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(0.72rem, 0.95vw, 0.85rem)",
                    opacity: 0.75,
                    }}
                >
                    {selected.tags.slice(0, 6).join(" • ")}
                </div>
                )}
            </motion.div>
            </div>

            {/* Buttons overlay */}
            {langs.map((lang, i) => {
                const isActive = lang.id === selectedId;
                const BtnIcon = lang.icon;

                return (
                    <button
                    key={lang.id}
                    type="button"
                    onClick={() => setSelectedId(lang.id)}
                    className="absolute flex items-center justify-center"
                    style={{
                        left: BUTTONS[i]?.left ?? "50%",
                        top: BUTTONS[i]?.top ?? "80%",
                        transform: "translate(-50%, -50%)",
                        width: 70,
                        height: 64,
                        borderRadius: 999,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: isActive ? "0 0 16px 4px rgba(255, 219, 92, 0.28)" : "none",
                    }}
                    aria-pressed={isActive}
                    aria-label={`Show ${lang.name}`}
                    >
                    <BtnIcon
                        className="text-[30px] md:text-[34px]"
                        style={{
                        color: isActive ? "var(--red)" : "var(--dark-green)",
                        filter: isActive ? "drop-shadow(0 0 10px rgba(255, 219, 92, 0.45))" : "none",
                        }}
                    />
                    </button>
                );
            })}
        </div>

        <p
            className="text-center text-[11px] tracking-widest mt-4"
            style={{ color: "var(--dark-green)", opacity: 0.65 }}
        >
            Tap a button to change the display
        </p>
        </div>
    );
}