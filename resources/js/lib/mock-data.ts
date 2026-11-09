import type { AnnualTheme, Post, School, SchoolTypeCount, Stat } from '@/types/ssn';

/** Placeholder content used as default page props until the Laravel controllers provide real data. */

export const mockStats: Stat[] = [
    { key: 'institutions', value: 110, grouped: true },
    { key: 'students', value: 55000, grouped: true },
    { key: 'teachers', value: 5000, grouped: true },
    { key: 'since', value: 2004, grouped: false },
];

export const mockTheme: AnnualTheme = {
    year: '2025–2026',
    title: { ar: 'مدرستي، مساحتي الآمنة', en: 'My school, my safe space' },
    description: {
        ar: 'موضوع هذا العام يدعو المدارس إلى بناء بيئات تعلّم آمنة وشاملة يشعر فيها كل طالب بالانتماء.',
        en: 'This year’s theme calls on schools to build safe and inclusive learning environments where every student feels a sense of belonging.',
    },
};

export const mockSchoolTypeCounts: SchoolTypeCount[] = [
    { type: 'public', count: 38 },
    { type: 'semi_private', count: 12 },
    { type: 'private', count: 41 },
    { type: 'vocational', count: 9 },
    { type: 'unrwa', count: 10 },
];

export const mockPosts: Post[] = [
    {
        id: 1,
        slug: 'general-assembly-annual-theme',
        type: 'news',
        title: {
            ar: 'الجمعية العمومية تصوّت على الموضوع السنوي الجديد',
            en: 'The General Assembly votes on the new annual theme',
        },
        excerpt: {
            ar: 'اجتمع ممثلو المدارس الأعضاء لاختيار الموضوع الذي سيوجّه أنشطة الشبكة هذا العام.',
            en: 'Representatives of member schools met to choose the theme that will guide the network’s activities this year.',
        },
        published_at: '2025-10-12',
        image_url: '/images/slides/slide-1.jpg',
    },
    {
        id: 2,
        slug: 'teachers-workshop-report',
        type: 'event_report',
        title: {
            ar: 'تقرير ورشة المعلمين حول التعلّم النشط',
            en: 'Teacher Workshop Report on Active Learning',
        },
        excerpt: {
            ar: 'شارك أكثر من مئة معلم في ورشة تدريبية تناولت استراتيجيات التعلّم النشط في الصف.',
            en: 'More than a hundred teachers took part in a training workshop on active learning strategies in the classroom.',
        },
        published_at: '2025-09-28',
        image_url: '/images/slides/slide-3.jpg',
    },
    {
        id: 3,
        slug: 'principals-lecture-series',
        type: 'news',
        title: {
            ar: 'انطلاق سلسلة محاضرات لمديري المدارس',
            en: 'Launch of a series of lectures for school principals',
        },
        excerpt: {
            ar: 'محاضرات شهرية تتناول القيادة المدرسية وإدارة التغيير والتواصل مع الأهالي.',
            en: 'Monthly lectures covering school leadership, change management and communication with parents.',
        },
        published_at: '2025-09-05',
        image_url: '/images/slides/slide-2.jpg',
    },
];

export const mockSchools: School[] = [
    {
        id: 1,
        name: { ar: 'مدرسة صيدا النموذجية', en: 'Saida Model School' },
        type: 'public',
        area: 'saida',
        image_url: '/images/schools/s4.jpg',
        latitude: null,
        longitude: null,
    },
    {
        id: 2,
        name: { ar: 'مدرسة الأمل الابتدائية', en: 'Al-Amal Primary School' },
        type: 'semi_private',
        area: 'saida',
        image_url: '/images/schools/s3.jpg',
        latitude: null,
        longitude: null,
    },
    {
        id: 3,
        name: { ar: 'ثانوية جزّين', en: 'Jezzine Secondary School' },
        type: 'public',
        area: 'jezzine',
        image_url: '/images/schools/s5.jpg',
        latitude: null,
        longitude: null,
    },
    {
        id: 4,
        name: { ar: 'المعهد المهني في صيدا', en: 'Saida Vocational Institute' },
        type: 'vocational',
        area: 'saida',
        image_url: '/images/schools/s6.jpg',
        latitude: null,
        longitude: null,
    },
    {
        id: 5,
        name: { ar: 'مدرسة الأونروا للبنات', en: 'UNRWA Girls’ School' },
        type: 'unrwa',
        area: 'saida',
        image_url: '/images/schools/s2.jpg',
        latitude: null,
        longitude: null,
    },
    {
        id: 6,
        name: { ar: 'مدرسة المعرفة الخاصة', en: 'Al-Maarifa Private School' },
        type: 'private',
        area: 'neighboring',
        image_url: '/images/schools/s1.jpg',
        latitude: null,
        longitude: null,
    },
];
