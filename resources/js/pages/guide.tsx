import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { GuideBlockView } from '@/components/guide-blocks';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import SiteLayout from '@/layouts/site-layout';
import { guideNav, guidePages, type GuidePageKey } from '@/lib/content/guide';
import { useTranslation } from '@/lib/i18n';

/** One page of the members' guide; the route decides which page by its key. */
export default function Guide({ page }: { page: GuidePageKey }) {
    const { t, l } = useTranslation();
    const content = guidePages[page];

    return (
        <SiteLayout>
            <Head title={l(content.title)} />

            <PageHeader eyebrow={l(content.eyebrow)} title={l(content.title)} lead={content.lead && l(content.lead)} image={content.image} />

            <article className="mx-auto max-w-5xl px-6 pb-12 pt-16 sm:px-10 lg:px-16">
                {content.blocks.map((block, index) => (
                    <GuideBlockView key={index} block={block} />
                ))}
            </article>

            <nav aria-labelledby="guide-continue" className="mx-auto max-w-5xl px-6 pb-24 pt-8 sm:px-10 lg:px-16">
                <Reveal>
                    <h2 id="guide-continue" className="text-sm font-bold uppercase tracking-[0.2em] text-brand-900">
                        {t('guide.continue')}
                    </h2>
                    <ul className="mt-5 flex flex-wrap gap-3">
                        {guideNav
                            .filter((item) => item.key !== page)
                            .map((item) => (
                                <li key={item.key}>
                                    <Link
                                        href={item.href}
                                        className="btn-shine inline-flex items-center gap-2 rounded-full border border-plum-900/25 bg-white/60 px-5 py-2.5 text-sm font-semibold text-plum-950 transition hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        {t(item.label)}
                                        <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </Reveal>
            </nav>
        </SiteLayout>
    );
}
