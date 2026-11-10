import type { SchoolType } from '@/types/ssn';

/** Photo shown for each kind of school until real photography is supplied. */
export const schoolTypeImages: Record<SchoolType, string> = {
    public: '/images/photos/17.jpg',
    semi_private: '/images/photos/16.jpg',
    private: '/images/photos/11.jpg',
    vocational: '/images/photos/9.jpg',
    unrwa: '/images/photos/14.jpg',
};
