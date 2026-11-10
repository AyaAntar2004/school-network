import type { TranslationKey } from '@/lib/i18n';

export interface NavItem {
    label: TranslationKey;
    href: string;
    children?: { label: TranslationKey; href: string }[];
}

/** Only "/" exists so far; the other paths are where the upcoming phases will mount their pages. */
export const mainNav: NavItem[] = [
    {
        label: 'nav.about',
        href: '/about',
        children: [
            { label: 'nav.about.intro', href: '/about' },
            { label: 'nav.about.history', href: '/about/history' },
            { label: 'nav.about.vision', href: '/about/vision' },
            { label: 'nav.about.governance', href: '/about/governance' },
        ],
    },
    { label: 'nav.schools', href: '/schools' },
    { label: 'nav.theme', href: '/annual-theme' },
    { label: 'nav.development', href: '/professional-development' },
    {
        label: 'nav.resources',
        href: '/resources',
        children: [{ label: 'nav.resources.observatory', href: '/resources/observatory' }],
    },
    { label: 'nav.news', href: '/news' },
    { label: 'nav.events', href: '/events' },
    { label: 'nav.contact', href: '/contact' },
];

export const joinHref = '/join';
export const schoolsHref = '/schools';

export const footerLinks: { label: TranslationKey; href: string }[] = [
    { label: 'nav.about', href: '/about' },
    { label: 'nav.schools', href: '/schools' },
    { label: 'nav.theme', href: '/annual-theme' },
    { label: 'nav.development', href: '/professional-development' },
    { label: 'nav.news', href: '/news' },
    { label: 'nav.events', href: '/events' },
    { label: 'nav.contact', href: '/contact' },
];

/** The full-screen menu lists the first five items in two captioned groups and the rest as minor links. */
export const menuGroups: { caption: TranslationKey; items: NavItem[] }[] = [
    { caption: 'menu.network', items: mainNav.slice(0, 3) },
    { caption: 'menu.resources', items: mainNav.slice(3, 5) },
];
export const menuMinorLinks = mainNav.slice(5);

export interface PhotoCard {
    caption: TranslationKey;
    title: TranslationKey;
    href: string;
    image: string;
}

/** Photo cards shown beside the menu links. */
export const menuCards: PhotoCard[] = [
    { caption: 'menu.cap.directory', title: 'menu.card.schools', href: '/schools', image: '/images/photos/17.jpg' },
    { caption: 'menu.cap.theme', title: 'menu.card.theme', href: '/annual-theme', image: '/images/photos/13.jpg' },
    { caption: 'menu.cap.training', title: 'menu.card.training', href: '/professional-development', image: '/images/photos/12.jpg' },
    { caption: 'menu.cap.news', title: 'menu.card.news', href: '/news', image: '/images/photos/7.jpg' },
];
export const menuJoinCard = { caption: 'menu.cap.join', title: 'menu.card.join', href: '/join' } as const satisfies Omit<PhotoCard, 'image'>;

/** Tall photo cards for the "areas of work" section on the home page. */
export const exploreCards: { title: TranslationKey; href: string; image: string }[] = [
    { title: 'nav.schools', href: '/schools', image: '/images/photos/15.jpg' },
    { title: 'nav.theme', href: '/annual-theme', image: '/images/photos/13.jpg' },
    { title: 'nav.development', href: '/professional-development', image: '/images/photos/12.jpg' },
    { title: 'nav.resources.observatory', href: '/resources/observatory', image: '/images/photos/5.jpg' },
];
