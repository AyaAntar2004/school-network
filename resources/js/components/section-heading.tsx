import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'start' | 'center';
    inverse?: boolean;
    className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'start', inverse, className }: SectionHeadingProps) {
    return (
        <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
            {eyebrow && (
                <p className={cn('mb-2 text-sm font-semibold', inverse ? 'text-brand-100' : 'text-brand-900')}>{eyebrow}</p>
            )}
            <h2 className={cn('text-2xl font-bold leading-tight sm:text-3xl', inverse ? 'text-plum-950' : 'text-plum-950')}>
                {title}
            </h2>
            {description && (
                <p className={cn('mt-3 text-base leading-relaxed', inverse ? 'text-brand-50' : 'text-stone-700')}>
                    {description}
                </p>
            )}
        </div>
    );
}
