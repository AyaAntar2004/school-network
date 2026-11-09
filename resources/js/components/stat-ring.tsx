import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/lib/i18n';

interface StatRingProps {
    value: number;
    grouped: boolean;
    label: string;
}

const DURATION_MS = 1800;
const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Circular key figure: the ring draws itself and the number counts up when scrolled into view. */
export function StatRing({ value, grouped, label }: StatRingProps) {
    const { formatNumber } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        const element = ref.current;
        if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        let frame = 0;
        setProgress(0);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }
                observer.disconnect();

                const start = performance.now();
                const tick = (now: number) => {
                    const linear = Math.min((now - start) / DURATION_MS, 1);
                    setProgress(1 - Math.pow(1 - linear, 3));
                    if (linear < 1) {
                        frame = requestAnimationFrame(tick);
                    }
                };
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.4 },
        );
        observer.observe(element);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <div className="relative size-44 sm:size-52">
                <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden="true">
                    <circle cx="60" cy="60" r={RADIUS} className="fill-white stroke-mist-200" strokeWidth="6" />
                    <circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="stroke-brand-600"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
                    />
                </svg>
                <p className="absolute inset-0 flex items-center justify-center text-3xl font-bold tabular-nums text-plum-950 sm:text-4xl">
                    <span aria-hidden="true">{formatNumber(Math.round(value * progress), grouped)}</span>
                    <span className="sr-only">{formatNumber(value, grouped)}</span>
                </p>
            </div>
            <p className="mt-4 max-w-[11rem] text-sm font-semibold text-stone-700">{label}</p>
        </div>
    );
}
