import type { ReactNode } from 'react';
import { useTranslation, type TranslationKey } from '@/lib/i18n';
import { cn } from '@/lib/utils';

/** lucide-react no longer ships brand icons, so these are small inline SVGs (Feather paths, MIT). */
const networks: { label: TranslationKey; href: string; icon: ReactNode }[] = [
    {
        label: 'social.facebook',
        href: '#',
        icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    },
    {
        label: 'social.instagram',
        href: '#',
        icon: (
            <>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
            </>
        ),
    },
    {
        label: 'social.youtube',
        href: '#',
        icon: (
            <>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <path d="m9.75 15.02 5.75-3.27-5.75-3.27z" />
            </>
        ),
    },
    {
        label: 'social.linkedin',
        href: '#',
        icon: (
            <>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </>
        ),
    },
];

export function SocialLinks({ className, onDark = false }: { className?: string; onDark?: boolean }) {
    const { t } = useTranslation();

    return (
        <ul className={cn('flex items-center gap-1', className)}>
            {networks.map(({ label, href, icon }) => (
                <li key={label}>
                    <a
                        href={href}
                        className={cn(
                            'flex size-10 items-center justify-center rounded-full transition',
                            onDark ? 'text-white hover:bg-white/15' : 'bg-white text-plum-900 shadow-sm hover:bg-brand-600 hover:text-white',
                        )}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="size-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            {icon}
                        </svg>
                        <span className="sr-only">{t(label)}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}
