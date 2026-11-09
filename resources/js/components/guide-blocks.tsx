import { ExternalLink, Quote } from 'lucide-react';
import { KenBurnsImage } from '@/components/ken-burns-image';
import { NetworkGraphic } from '@/components/network-graphic';
import { Reveal } from '@/components/reveal';
import { useTranslation } from '@/lib/i18n';
import type { GuideBlock } from '@/lib/content/guide';
import { cn } from '@/lib/utils';

function Dot() {
    return <span aria-hidden="true" className="mt-2.5 size-2.5 shrink-0 rounded-full bg-brand-600" />;
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
    return (
        <ul className={cn('space-y-3', className)}>
            {items.map((item) => (
                <li key={item} className="flex gap-4 leading-relaxed text-stone-700">
                    <Dot />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

/** Renders one content block of a guide page, as plain text, points, numbered circles or a big picture. */
export function GuideBlockView({ block }: { block: GuideBlock }) {
    const { l } = useTranslation();

    switch (block.type) {
        case 'heading':
            return (
                <Reveal className="mt-20 first:mt-0">
                    {block.eyebrow && <p className="mb-2 text-sm font-semibold text-brand-900">{l(block.eyebrow)}</p>}
                    <h2 className="max-w-3xl text-3xl font-bold leading-tight text-plum-950 sm:text-4xl">{l(block.title)}</h2>
                </Reveal>
            );

        case 'text':
            return (
                <Reveal>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-700">{l(block.text)}</p>
                </Reveal>
            );

        case 'bullets':
            return (
                <Reveal>
                    <Bullets items={block.items.map(l)} className="mt-6 max-w-3xl text-lg" />
                </Reveal>
            );

        case 'quote':
            return (
                <Reveal className="mt-4">
                    <figure className="flex max-w-3xl gap-5">
                        <Quote className="mt-1 size-10 shrink-0 text-brand-800 rtl:-scale-x-100" aria-hidden="true" />
                        <div>
                            <blockquote className="text-2xl font-medium leading-relaxed text-plum-950">{l(block.text)}</blockquote>
                            <figcaption className="mt-3 text-sm font-semibold text-brand-900">— {l(block.author)}</figcaption>
                        </div>
                    </figure>
                </Reveal>
            );

        case 'network':
            return (
                <Reveal from="zoom" className="my-16">
                    <NetworkGraphic />
                </Reveal>
            );

        case 'steps':
            return (
                <ol className="mt-10 grid gap-x-14 gap-y-14 md:grid-cols-2">
                    {block.items.map((item, index) => (
                        <Reveal as="li" key={l(item.title)} delay={(index % 2) * 120} className="relative flex gap-6">
                            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xl font-bold text-white ring-8 ring-brand-600/15">
                                {index + 1}
                            </span>
                            <div className="min-w-0 pt-1.5">
                                <h3 className="text-xl font-bold leading-snug text-plum-950">{l(item.title)}</h3>
                                {item.text && <p className="mt-2 leading-relaxed text-stone-700">{l(item.text)}</p>}
                                {item.points && <Bullets items={item.points.map(l)} className="mt-4 text-[0.95rem]" />}
                            </div>
                        </Reveal>
                    ))}
                </ol>
            );

        case 'callout':
            return (
                <Reveal className="my-16">
                    <div className="relative isolate flex min-h-[22rem] items-center overflow-hidden rounded-[3rem] p-8 text-white sm:rounded-[4rem] sm:p-16">
                        <KenBurnsImage src={block.image} origin="40% 50%" />
                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-plum-950/90 via-plum-900/75 to-plum-900/30 rtl:bg-gradient-to-l" />
                        <div className="relative max-w-2xl">
                            <h2 className="text-3xl font-bold sm:text-5xl">{l(block.title)}</h2>
                            <p className="mt-5 text-lg leading-relaxed text-plum-100">{l(block.text)}</p>
                        </div>
                    </div>
                </Reveal>
            );

        case 'links':
            return (
                <Reveal>
                    <ul className="mt-6 flex flex-wrap gap-3">
                        {block.items.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-2 rounded-full border border-plum-900/25 bg-white/60 px-5 py-2.5 text-sm font-semibold text-plum-950 transition hover:-translate-y-0.5 hover:bg-white"
                                >
                                    {l(item.label)}
                                    <ExternalLink className="size-4" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            );
    }
}
