import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PointItemProps {
    icon: LucideIcon;
    title: string;
    text: string;
    isLast?: boolean;
}

/** One stop on a dotted vertical path: a round marker, then the title and text beside it. */
export function PointItem({ icon: Icon, title, text, isLast }: PointItemProps) {
    return (
        <div className={cn('relative flex gap-6', !isLast && 'pb-12')}>
            {!isLast && (
                <span
                    aria-hidden="true"
                    className="absolute start-7 top-16 bottom-0 -ms-px border-s-2 border-dotted border-brand-300"
                />
            )}
            <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-brand-600/15">
                <Icon className="size-6" aria-hidden="true" />
            </span>
            <div className="pt-1.5">
                <h3 className="text-xl font-bold text-plum-950">{title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-stone-700">{text}</p>
            </div>
        </div>
    );
}
