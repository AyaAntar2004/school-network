import { cn } from '@/lib/utils';

/** An open book drawn with soft lines; the decorative motif of the page background. */
function Book({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 120 90" fill="none" strokeLinejoin="round" strokeLinecap="round" className={cn('absolute', className)}>
            <path d="M60 20C45 10 25 10 8 16v58c17-6 37-6 52 4z" className="fill-white/35 stroke-mist-300" strokeWidth="2.5" />
            <path d="M60 20c15-10 35-10 52-4v58c-17-6-37-6-52 4z" className="fill-white/25 stroke-mist-300" strokeWidth="2.5" />
            <path d="M60 20v58" className="stroke-mist-300" strokeWidth="2.5" />
            <path d="M18 28c10-2 24-1 34 4M18 40c10-2 24-1 34 4M18 52c10-2 24-1 34 4M68 32c10-5 24-6 34-4M68 44c10-5 24-6 34-4M68 56c10-5 24-6 34-4" className="stroke-mist-300" strokeWidth="2" />
        </svg>
    );
}

/** Fixed, decorative backdrop: very light blue with a few large open books slowly drifting and turning. */
export function AmbientBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-mist-50">
            <div className="absolute inset-0 bg-gradient-to-b from-mist-100/80 via-mist-50 to-mist-100/60" />
            <Book className="-top-10 -right-24 w-[34rem] animate-orbit-slow opacity-50" />
            <Book className="-bottom-16 -left-28 w-[40rem] animate-orbit-slow-reverse opacity-50" />
            <Book className="top-1/3 left-[8%] w-56 animate-bob opacity-70" />
            <Book className="top-[55%] right-[10%] w-40 animate-blob opacity-60" />
            <Book className="top-[12%] left-[38%] w-32 animate-blob-reverse opacity-50" />
        </div>
    );
}
