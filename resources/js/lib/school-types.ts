import type { SchoolType } from '@/types/ssn';

/** Photo shown for each kind of school until real photography is supplied. */
export const schoolTypeImages: Record<SchoolType, string> = {
    public: '/images/schools/s4.jpg',
    semi_private: '/images/schools/s3.jpg',
    private: '/images/schools/s5.jpg',
    vocational: '/images/schools/s6.jpg',
    unrwa: '/images/schools/s2.jpg',
};
