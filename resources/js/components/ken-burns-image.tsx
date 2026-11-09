import { cn } from '@/lib/utils';

interface KenBurnsImageProps {
    src: string;
    origin?: string;
    className?: string;
}

/** Decorative photo that slowly zooms and drifts; fill a positioned, overflow-hidden parent with it. */
export function KenBurnsImage({ src, origin = 'center', className }: KenBurnsImageProps) {
    return (
        <img
            src={src}
            alt=""
            loading="lazy"
            style={{ transformOrigin: origin }}
            className={cn('absolute inset-0 size-full animate-ken-burns object-cover will-change-transform', className)}
        />
    );
}
