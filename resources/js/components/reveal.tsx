import { useEffect, useRef, useState, type ElementType, type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
    as?: ElementType;
    /** Stagger delay in ms, so sibling items cascade in. */
    delay?: number;
    className?: string;
    /** Where the content travels from as it appears. */
    from?: 'up' | 'left' | 'right' | 'zoom';
}

const hiddenState = {
    up: 'translate-y-10',
    left: '-translate-x-16',
    right: 'translate-x-16',
    zoom: 'scale-90',
} as const;

/** Fades and lifts its content into view the first time it scrolls on screen. */
export function Reveal({ as: Tag = 'div', delay = 0, from = 'up', className, children }: PropsWithChildren<RevealProps>) {
    const ref = useRef<HTMLElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setShown(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 },
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                'transition-all duration-1000 ease-out',
                shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `${hiddenState[from]} opacity-0`,
                className,
            )}
        >
            {children}
        </Tag>
    );
}
