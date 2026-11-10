import { Link, router, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import { PageNavButtons } from '@/components/page-nav-buttons';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';
import type { SharedProps } from '@/types/ssn';

/** Plain working layout for the admin portal; it has no photos or animation. */
export default function AdminLayout({ children }: PropsWithChildren) {
    const { t, locale, setLocale, dir } = useTranslation();
    const { auth } = usePage<SharedProps>().props;

    return (
        <div dir={dir} lang={locale} className="min-h-screen bg-mist-50 text-stone-800">
            <header className="border-b border-plum-900/10 bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
                    <div className="flex flex-wrap items-center gap-6">
                        <PageNavButtons homeHref="/admin/events" />
                        <p className="text-lg font-bold text-plum-950">{t('admin.title')}</p>
                        <Link href="/admin/events" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
                            {t('admin.events')}
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <button
                            type="button"
                            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
                            className="rounded-full border border-plum-900/20 px-4 py-1.5 font-semibold hover:bg-mist-100"
                        >
                            {locale === 'ar' ? t('lang.en') : t('lang.ar')}
                        </button>
                        {auth?.user && <span className="text-stone-600">{auth.user.email}</span>}
                        <Button variant="outline" onClick={() => router.post('/admin/logout')}>
                            {t('admin.signOut')}
                        </Button>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        </div>
    );
}
