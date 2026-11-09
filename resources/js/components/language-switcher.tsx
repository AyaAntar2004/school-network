import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

/** Compact toggle that shows the code of the language it will switch to (EN or AR). */
export function LanguageSwitcher({ className }: { className?: string }) {
    const { locale, setLocale, t } = useTranslation();
    const target = locale === 'ar' ? 'en' : 'ar';

    return (
        <button
            type="button"
            onClick={() => setLocale(target)}
            lang={target}
            aria-label={`${t('lang.switchTo')}: ${t(target === 'ar' ? 'lang.ar' : 'lang.en')}`}
            className={cn('flex size-12 items-center justify-center rounded-full text-sm font-bold uppercase tracking-wide', className)}
        >
            {target}
        </button>
    );
}
