import { Head } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { EventTimeline } from '@/components/event-timeline';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import SiteLayout from '@/layouts/site-layout';
import { groupEventsByYear, type NetworkEvent } from '@/lib/content/events';
import { useTranslation } from '@/lib/i18n';

/** The network's activities since 2001, grouped by year, latest first. */
export default function Events({ events: networkEvents }: { events: NetworkEvent[] }) {
    const { t } = useTranslation();
    const allGroups = groupEventsByYear(networkEvents);
    const [year, setYear] = useState<number | 'all'>('all');
    const groups = year === 'all' ? allGroups : allGroups.filter((group) => group.year === year);
    const shown = groups.reduce((total, group) => total + group.events.length, 0);

    return (
        <SiteLayout>
            <Head title={t('events.title')} />

            <PageHeader eyebrow={t('events.eyebrow')} title={t('events.title')} lead={t('events.lead')} image="/images/photos/10.jpg" />

            <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:px-10 lg:px-16">
                <Reveal>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="text-lg font-semibold text-plum-950">
                            {shown} {t('events.count')}
                        </p>
                        <label className="relative inline-flex items-center">
                            <span className="sr-only">{t('events.jump')}</span>
                            <span className="pointer-events-none absolute start-4 text-sm font-semibold text-brand-700">{t('events.year')}:</span>
                            <select
                                value={year}
                                onChange={(event) => setYear(event.target.value === 'all' ? 'all' : Number(event.target.value))}
                                className="cursor-pointer appearance-none rounded-full border border-plum-900/25 bg-white/70 py-2.5 pe-10 ps-[4.75rem] text-sm font-semibold text-plum-950 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                            >
                                <option value="all">{t('events.allYears')}</option>
                                {allGroups.map((group) => (
                                    <option key={group.year} value={group.year}>
                                        {group.year} ({group.events.length})
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute end-3 size-4 text-plum-950" aria-hidden="true" />
                        </label>
                    </div>
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
