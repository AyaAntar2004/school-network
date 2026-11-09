import { Link } from '@inertiajs/react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';
import { joinHref, schoolsHref } from '@/lib/nav';

const WAVE_PATH = 'M0 60 Q 150 0 300 60 T 600 60 T 900 60 T 1200 60 T 1500 60 T 1800 60 T 2100 60 T 2400 60 V120 H0Z';

const enter = (ms: number) => ({ animationDelay: `${ms}ms` });

/** First-screen header: the Sidon Sea Castle, slowly moving, with waves rolling into the page below. */
export function CastleHero() {
    const { t } = useTranslation();

    return (
        <header className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-plum-950">
            <div role="img" aria-label={t('hero.imageLabel')} className="absolute inset-0 -z-10 overflow-hidden">
                <img
                    src="/images/castle-hero.jpg"
                    alt=""
                    style={{ transformOrigin: '70% 60%' }}
                    className="absolute inset-x-0 -top-[14%] h-[114%] w-full animate-ken-burns object-cover will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-plum-950/60 via-transparent to-transparent rtl:bg-gradient-to-l" />
            </div>

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-40 pt-32 sm:px-10 lg:px-16">
                <div className="w-full">
                    <p style={enter(200)} className="animate-rise-in text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">{t('brand.tagline')}</p>
                    <h1 style={enter(400)} className="animate-rise-in mt-5 max-w-6xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                        {t('hero.title')}
                    </h1>
                    <p style={enter(650)} className="animate-rise-in mt-6 max-w-xl text-lg leading-relaxed text-plum-100">{t('hero.text')}</p>
                    <div style={enter(900)} className="animate-rise-in mt-10 flex flex-wrap gap-4">
                        <Button asChild size="lg">
                            <Link href={joinHref}>{t('hero.join')}</Link>
                        </Button>
                        <Button asChild size="lg" variant="outlineLight">
                            <Link href={schoolsHref}>{t('hero.explore')}</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <a
                href="#map"
                className="animate-pulse-ring absolute bottom-24 left-6 hidden items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur hover:bg-white/20 sm:flex"
            >
                {t('hero.scroll')}
                <ArrowDown className="size-4 animate-float" aria-hidden="true" />
            </a>

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
