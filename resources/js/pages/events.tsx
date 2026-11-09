import { Head } from '@inertiajs/react';
import { EventTimeline } from '@/components/event-timeline';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import SiteLayout from '@/layouts/site-layout';
import { groupEventsByYear, type NetworkEvent } from '@/lib/content/events';
import { useTranslation } from '@/lib/i18n';

/** The network's activities since 2001, grouped by year. */
export default function Events({ events: networkEvents }: { events: NetworkEvent[] }) {
    const { t } = useTranslation();
    const groups = groupEventsByYear(networkEvents);

    return (
        <SiteLayout>
            <Head title={t('events.title')} />

            <PageHeader eyebrow={t('events.eyebrow')} title={t('events.title')} lead={t('events.lead')} image="/images/castle-2.jpg" />

            <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:px-10 lg:px-16">
                <Reveal>
                    <p className="text-lg font-semibold text-plum-950">
                        {networkEvents.length} {t('events.count')}
                    </p>
                    <nav aria-label={t('events.jump')} className="mt-5">
                        <ul className="flex flex-wrap gap-2">
                            {groups.map(({ year }) => (
                                <li key={year}>
                                    <a
                                        href={`#y${year}`}
                                        className="btn-shine inline-flex rounded-full border border-plum-900/25 bg-white/60 px-4 py-2 text-sm font-semibold text-plum-950 transition hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
                                    >
                                        {year}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Reveal>

                <div className="mt-16 space-y-20">
                    {groups.map(({ year, events }) => (
                        <div key={year} id={`y${year}`} className="grid scroll-mt-8 gap-8 md:grid-cols-[9rem_1fr]">
                            <Reveal from="zoom">
                                <div className="flex size-32 flex-col items-center justify-center rounded-full bg-brand-600 text-white shadow-xl md:sticky md:top-8">
                                    <span className="text-3xl font-bold">{year}</span>
                                    <span className="text-xs text-brand-100">
                                        {events.length} {t('events.shortCount')}
                                    </span>
                                </div>
                            </Reveal>
                            <EventTimeline events={events} />
                        </div>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
