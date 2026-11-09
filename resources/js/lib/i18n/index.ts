import { useCallback, useSyncExternalStore } from 'react';
import { usePage } from '@inertiajs/react';
import type { Locale, Localized, SharedProps } from '@/types/ssn';
import ar from './ar';
import en from './en';

export type TranslationKey = keyof typeof en;

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { ar, en };
const STORAGE_KEY = 'ssn-locale';

const listeners = new Set<() => void>();
let override: Locale | null = readStoredLocale();

function readStoredLocale(): Locale | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'ar' || stored === 'en' ? stored : null;
    } catch {
        return null;
    }
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

function setOverride(locale: Locale) {
    override = locale;
    try {
        localStorage.setItem(STORAGE_KEY, locale);
    } catch {
        // storage unavailable: the choice only lasts for this page view
    }
    listeners.forEach((listener) => listener());
}

export function useTranslation() {
    const { locale: serverLocale } = usePage<SharedProps>().props;
    const chosen = useSyncExternalStore(subscribe, () => override);
    const locale: Locale = chosen ?? serverLocale ?? 'ar';

    const t = useCallback((key: TranslationKey) => dictionaries[locale][key], [locale]);
    const l = useCallback((text: Localized) => text[locale], [locale]);

    const formatNumber = useCallback(
        (value: number, grouped = true) =>
            new Intl.NumberFormat(`${locale}-u-nu-latn`, { useGrouping: grouped }).format(value),
        [locale],
    );
    const formatDate = useCallback(
        (iso: string) => new Intl.DateTimeFormat(`${locale}-u-nu-latn`, { dateStyle: 'long' }).format(new Date(iso)),
        [locale],
    );

    return {
        locale,
        dir: locale === 'ar' ? ('rtl' as const) : ('ltr' as const),
        setLocale: setOverride,
        t,
        l,
        formatNumber,
        formatDate,
    };
}
