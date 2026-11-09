import { Link } from '@inertiajs/react';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

/** Text-based logo; `dark` is for use on dark backgrounds such as photos. */
export function SsnWordmark({ dark = false }: { dark?: boolean }) {
    const { t, locale } = useTranslation();

    return (
        <Link href="/" className="group flex items-center gap-3 rounded-lg">
            <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold tracking-wide text-white"
            >
                SSN
            </span>
            <span className="flex flex-col leading-tight">
                <span className={cn('text-base font-bold', dark ? 'text-white group-hover:text-brand-200' : 'text-plum-950 group-hover:text-brand-700')}>{t('brand.name')}</span>
                <span lang={locale === 'ar' ? 'en' : 'ar'} className={cn('text-xs', dark ? 'text-plum-200' : 'text-stone-700')}>
                    {t('brand.nameAlt')}
                </span>
            </span>
        </Link>
    );
}
