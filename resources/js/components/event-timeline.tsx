import { CalendarDays, MapPin } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import type { NetworkEvent } from '@/lib/content/events';
import { useTranslation } from '@/lib/i18n';

/**
 * Events as points on a vertical line. The event texts come from an Arabic-only source list,
 * so they are wrapped in <bdi lang="ar"> and the surrounding layout follows the page direction.
 */
export function EventTimeline({ events, showYear = false }: { events: NetworkEvent[]; showYear?: boolean }) {
    const { t } = useTranslation();

    return (
        <ol className="relative space-y-8 border-s-2 border-dashed border-brand-300 ps-8">
            {events.map((event, index) => (
                <Reveal as="li" key={event.id} delay={Math.min(index, 5) * 90} from="left" className="relative">
                    <span
                        aria-hidden="true"
                        className="absolute -start-[2.7rem] top-1.5 flex size-5 items-center justify-center rounded-full bg-brand-600 ring-4 ring-mist-50"
                    >
                        <span className="size-2 animate-pulse-ring rounded-full bg-white" />
                    </span>

                    <p className="text-xs font-semibold text-brand-700">
                        {t('events.number')} {event.id}
                        {showYear && <span className="ms-2 rounded-full bg-brand-600 px-2.5 py-0.5 text-white">{event.year}</span>}
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-snug text-plum-950 sm:text-xl">
                        <bdi lang="ar">{event.title}</bdi>
                    </h3>
                    <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-stone-700">
                        <span className="inline-flex items-center gap-2">
                            <CalendarDays className="size-4 text-brand-700" aria-hidden="true" />
                            {event.date ? <bdi lang="ar">{event.date}</bdi> : t('events.undated')}
                        </span>
                        {event.place && (
                            <span className="inline-flex items-center gap-2">
                                <MapPin className="size-4 text-brand-700" aria-hidden="true" />
                                <bdi lang="ar">{event.place}</bdi>
                            </span>
                        )}
                    </p>
                </Reveal>
            ))}
        </ol>
    );
}
