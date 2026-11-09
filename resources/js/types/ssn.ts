export type Locale = 'ar' | 'en';

/** Text available in both site languages. */
export interface Localized {
    ar: string;
    en: string;
}

export type SchoolType = 'public' | 'semi_private' | 'private' | 'vocational' | 'unrwa';
export type SchoolArea = 'saida' | 'jezzine' | 'neighboring';

export interface School {
    id: number;
    name: Localized;
    type: SchoolType;
    area: SchoolArea;
    image_url: string;
    latitude: number | null;
    longitude: number | null;
}

export type PostType = 'news' | 'event_report';

export interface Post {
    id: number;
    slug: string;
    type: PostType;
    title: Localized;
    excerpt: Localized;
    published_at: string;
    image_url: string | null;
}

export interface Event {
    id: number;
    title: Localized;
    starts_at: string;
    location: Localized;
}

export type StatKey = 'institutions' | 'students' | 'teachers' | 'since';

export interface Stat {
    key: StatKey;
    value: number;
    /** Format with thousands separators; false for years. */
    grouped: boolean;
}

export interface AnnualTheme {
    year: string;
    title: Localized;
    description: Localized;
}

export interface SchoolTypeCount {
    type: SchoolType;
    count: number;
}

export interface SharedProps {
    locale: Locale;
    auth?: { user: { name: string; email: string } | null };
    [key: string]: unknown;
}
