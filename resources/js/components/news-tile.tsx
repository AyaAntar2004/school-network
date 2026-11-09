import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import type { Post } from '@/types/ssn';
import { cn } from '@/lib/utils';

interface NewsTileProps {
    post: Post;
    featured?: boolean;
}

/** A news story presented as a large picture with the headline set over it. */
export function NewsTile({ post, featured }: NewsTileProps) {
    const { t, l, formatDate } = useTranslation();
    const href = `/news/${post.slug}`;

    return (
        <article
            className={cn(
                'group relative isolate flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2.5rem] bg-plum-900 p-7 text-white',
                featured && 'lg:min-h-[40rem] lg:p-10',
            )}
        >
            {post.image_url && (
                <img
                    src={post.image_url}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 -z-10 size-full object-cover transition duration-[3000ms] ease-out group-hover:scale-110"
                />
            )}
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-plum-950/90 via-plum-950/40 to-transparent" />

            <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold">
                    {t(post.type === 'news' ? 'post.news' : 'post.event_report')}
                </span>
                <time dateTime={post.published_at} className="text-plum-100">
                    {formatDate(post.published_at)}
                </time>
            </div>
            <h3 className={cn('mt-3 font-bold leading-snug', featured ? 'text-2xl lg:text-4xl' : 'text-xl')}>
                <Link href={href} className="after:absolute after:inset-0">
                    {l(post.title)}
                </Link>
            </h3>
            {featured && <p className="mt-3 max-w-lg leading-relaxed text-plum-100">{l(post.excerpt)}</p>}
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
                {t('news.readMore')}
                <ArrowRight className="size-4 transition group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
            </span>
        </article>
    );
}
