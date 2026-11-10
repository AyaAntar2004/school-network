import { useEffect, useState, type PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AmbientBackground } from '@/components/ambient-background';
import { LanguageSwitcher } from '@/components/language-switcher';
import { PageNavButtons } from '@/components/page-nav-buttons';
import { SocialLinks } from '@/components/social-links';
import { SsnWordmark } from '@/components/ssn-wordmark';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useTranslation } from '@/lib/i18n';
import { footerLinks, menuCards, menuGroups, menuJoinCard, menuMinorLinks } from '@/lib/nav';
import { cn } from '@/lib/utils';

function ArrowButton() {
    return (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-plum-950 transition group-hover:bg-brand-600 group-hover:text-white">
            <ArrowRight className="size-5 rtl:rotate-180" aria-hidden="true" />
        </span>
    );
}

function MenuOverlay() {
    const { t } = useTranslation();
    const currentUrl = usePage().url.split('?')[0];

    return (
        <div className="flex min-h-0 flex-1 rtl:flex-row-reverse">
            <div className="flex w-16 shrink-0 flex-col items-center bg-plum-950 py-4 text-white sm:w-20">
                <SheetClose className="flex size-12 items-center justify-center rounded-full hover:bg-white/10">
                    <X className="size-6" aria-hidden="true" />
                    <span className="sr-only">{t('nav.closeMenu')}</span>
                </SheetClose>
                <div className="mt-3 border-t border-white/15 pt-4">
                    <LanguageSwitcher className="hover:bg-white/10" />
                </div>
                <SocialLinks onDark className="mt-auto flex-col" />
            </div>

            <div className="relative flex-1 overflow-y-auto">
                <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-48 size-[36rem] animate-orbit rounded-full border border-dashed border-mist-300" />
                <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-8 sm:px-12 lg:grid-cols-[1fr_26rem] lg:gap-20">
                    <div>
                        <SsnWordmark />
                        <nav aria-label={t('nav.main')} className="mt-12 space-y-10">
                            {menuGroups.map((group) => (
                                <div key={group.caption}>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-900">{t(group.caption)}</p>
                                    <ul className="mt-3 space-y-3">
                                        {group.items.map((item, index) => (
                                            <li key={item.label} style={{ animationDelay: `${350 + index * 110}ms` }} className="animate-rise-in">
                                                <Link
                                                    href={item.href}
                                                    aria-current={currentUrl === item.href ? 'page' : undefined}
                                                    className={cn(
                                                        'block text-4xl font-bold leading-tight transition-colors hover:text-brand-600 sm:text-5xl',
                                                        currentUrl === item.href ? 'text-brand-700' : 'text-plum-950',
                                                    )}
                                                >
                                                    {t(item.label)}
                                                </Link>
                                                {item.children && (
                                                    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                                                        {item.children.map((child) => (
                                                            <li key={child.label}>
                                                                <Link
                                                                    href={child.href}
                                                                    aria-current={currentUrl === child.href ? 'page' : undefined}
                                                                    className="text-sm font-medium text-stone-700 hover:text-brand-700 hover:underline"
                                                                >
                                                                    {t(child.label)}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <ul className="space-y-1">
                                {menuMinorLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-xl font-semibold text-brand-700 hover:text-brand-900">
                                            {t(item.label)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <ul className="space-y-3 lg:pt-2">
                        {menuCards.map((card, index) => (
                            <li key={card.href} style={{ animationDelay: `${500 + index * 130}ms` }} className="animate-slide-in-right">
                                <Link
                                    href={card.href}
                                    className="group relative isolate flex h-32 items-center justify-between gap-4 overflow-hidden rounded-3xl bg-plum-900 p-5 text-white"
                                >
                                    <img
                                        src={card.image}
                                        alt=""
                                        loading="lazy"
                                        className="absolute inset-0 -z-10 size-full object-cover transition duration-[2500ms] ease-out group-hover:scale-110"
                                    />
                                    <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-plum-950/85 via-plum-950/55 to-plum-950/20 rtl:bg-gradient-to-l" />
                                    <span>
                                        <span className="block text-[0.7rem] font-bold uppercase tracking-widest text-brand-200">{t(card.caption)}</span>
                                        <span className="mt-1 block text-xl font-bold leading-snug">{t(card.title)}</span>
                                    </span>
                                    <ArrowButton />
                                </Link>
                            </li>
                        ))}
                        <li style={{ animationDelay: '1100ms' }} className="animate-slide-in-right">
                            <Link
                                href={menuJoinCard.href}
                                className="group flex h-32 items-center justify-between gap-4 rounded-3xl bg-mist-300 p-5 text-plum-950"
                            >
                                <span>
                                    <span className="block text-[0.7rem] font-bold uppercase tracking-widest text-brand-800">{t(menuJoinCard.caption)}</span>
                                    <span className="mt-1 block text-xl font-bold leading-snug">{t(menuJoinCard.title)}</span>
                                </span>
                                <ArrowButton />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

/** The only navigation chrome: a round toggle that opens the full-screen menu. */
function FloatingMenu() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    useEffect(() => setOpen(false), [url]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    type="button"
                    className="fixed left-4 top-4 z-40 flex size-14 animate-pulse-ring items-center justify-center rounded-full bg-plum-950 text-white shadow-lg transition hover:scale-105 hover:bg-plum-800 sm:left-6 sm:top-6"
                >
                    <Menu className="size-6" aria-hidden="true" />
                    <span className="sr-only">{t('nav.openMenu')}</span>
                </button>
            </SheetTrigger>
            <SheetContent
                closeLabel={t('nav.closeMenu')}
                showClose={false}
                aria-describedby={undefined}
                className="w-full max-w-none bg-mist-100"
            >
                <SheetTitle className="sr-only">{t('nav.menuTitle')}</SheetTitle>
                <MenuOverlay />
            </SheetContent>
        </Sheet>
    );
}

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="pt-8">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
                <div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                        <p className="text-sm font-semibold text-plum-900">{t('footer.initiative')}</p>
                        <img src="/images/hf-logo.png" alt="" className="h-12 w-auto" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-stone-700">{t('footer.about')}</p>
                </div>

                <nav aria-labelledby="footer-links">
                    <h2 id="footer-links" className="text-sm font-bold text-plum-950">
                        {t('footer.quickLinks')}
                    </h2>
                    <ul className="mt-4 space-y-2 text-sm">
                        {footerLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-stone-700 hover:text-brand-700 hover:underline">
                                    {t(link.label)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className="text-sm font-bold text-plum-950">{t('footer.contact')}</h2>
                    <address className="mt-4 space-y-2 text-sm not-italic text-stone-700">
                        <p>{t('footer.address')}</p>
                        <p dir="ltr" className="text-start">
                            {t('footer.phone')}
                        </p>
                        <p>
                            <a href={`mailto:${t('footer.email')}`} className="hover:text-brand-700 hover:underline">
                                {t('footer.email')}
                            </a>
                        </p>
                    </address>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-plum-950">{t('footer.follow')}</h2>
                    <p className="mt-4 text-sm text-stone-700">{t('footer.followText')}</p>
                    <SocialLinks className="mt-4 gap-3" />
                </div>
            </div>
            <div className="mx-auto max-w-7xl space-y-2 px-4 pb-10 text-center text-sm text-stone-700 sm:px-6 lg:px-8">
                <p>
                    © {new Date().getFullYear()} {t('footer.rights')}
                </p>
                <p className="text-xs text-stone-600">{t('credits.photo')}</p>
            </div>
        </footer>
    );
}

export default function SiteLayout({ children }: PropsWithChildren) {
    const { t, locale, dir } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = locale;
        document.documentElement.dir = dir;
    }, [locale, dir]);

    return (
        <div className="relative min-h-screen overflow-x-clip">
            <AmbientBackground />
            <a
                href="#main"
                className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-semibold text-brand-700 focus:not-sr-only focus:absolute focus:start-4 focus:top-4"
            >
                {t('site.skipToContent')}
            </a>

            <FloatingMenu />
            <PageNavButtons className="fixed left-[4.75rem] top-[1.375rem] z-40 sm:left-24 sm:top-[1.875rem]" />

            <main id="main">{children}</main>
            <Footer />
        </div>
    );
}
