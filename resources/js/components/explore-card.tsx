import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface ExploreCardProps {
    title: string;
    href: string;
    image: string;
}

/** Tall photo card with a frosted label and a round arrow, linking to one area of the site. */
export function ExploreCard({ title, href, image }: ExploreCardProps) {
    return (
        <Link href={href} className="group relative isolate block aspect-[3/4] overflow-hidden rounded-3xl bg-plum-900 transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/40">
            <img
                src={image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 size-full object-cover transition duration-[3000ms] ease-out group-hover:scale-110"
            />
            <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/70 p-4 backdrop-blur-md">
                <span className="text-lg font-bold leading-snug text-plum-950">{title}</span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-plum-950 text-white transition group-hover:bg-brand-600">
                    <ArrowRight className="size-5 rtl:rotate-180" aria-hidden="true" />
                </span>
            </span>
        </Link>
    );
}
