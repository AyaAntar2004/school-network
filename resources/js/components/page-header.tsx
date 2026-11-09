import { KenBurnsImage } from '@/components/ken-burns-image';

const WAVE_PATH = 'M0 60 Q 150 0 300 60 T 600 60 T 900 60 T 1200 60 T 1500 60 T 1800 60 T 2100 60 T 2400 60 V120 H0Z';

interface PageHeaderProps {
    eyebrow: string;
    title: string;
    lead?: string;
    image: string;
}

/** Header of an inner page: a slowly moving photo, the page title, and a wave rolling into the content. */
export function PageHeader({ eyebrow, title, lead, image }: PageHeaderProps) {
    return (
        <header className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-plum-950">
            <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
                <KenBurnsImage src={image} origin="60% 40%" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/95 via-plum-950/60 to-plum-950/30" />
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 pb-36 pt-36 sm:px-10 lg:px-16">
                <p style={{ animationDelay: '150ms' }} className="animate-rise-in text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
                    {eyebrow}
                </p>
                <h1 style={{ animationDelay: '350ms' }} className="animate-rise-in mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                    {title}
                </h1>
                {lead && (
                    <p style={{ animationDelay: '600ms' }} className="animate-rise-in mt-6 max-w-2xl text-lg leading-relaxed text-plum-100">
                        {lead}
                    </p>
                )}
            </div>

            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 overflow-hidden">
                <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-[200%] animate-wave-slow fill-mist-200/60">
                    <path d={WAVE_PATH} />
                </svg>
                <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="absolute bottom-[-2px] left-0 h-4/5 w-[200%] animate-wave fill-mist-50">
                    <path d={WAVE_PATH} />
                </svg>
            </div>
        </header>
    );
}
