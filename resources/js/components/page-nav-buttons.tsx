import { router, usePage } from '@inertiajs/react';
import { ArrowLeft, Home } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const buttonClass =
    'flex size-11 items-center justify-center rounded-full bg-white text-plum-950 shadow-md transition hover:bg-mist-100';

/** Back (previous page, or the home page when there is no history) and Home. Hidden on the home page itself. */
export function PageNavButtons({ homeHref = '/', className }: { homeHref?: string; className?: string }) {
    const { t } = useTranslation();
    const { url } = usePage();

    if (url.split('?')[0] === homeHref) return null;

    const goBack = () => {
        if (window.history.length > 1) window.history.back();
        else router.visit(homeHref);
    };

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <button type="button" onClick={goBack} aria-label={t('nav.back')} title={t('nav.back')} className={buttonClass}>
                <ArrowLeft className="size-5 rtl:rotate-180" aria-hidden="true" />
            </button>
            <a href={homeHref} aria-label={t('nav.home')} title={t('nav.home')} className={buttonClass}>
                <Home className="size-5" aria-hidden="true" />
            </a>
        </div>
    );
}
