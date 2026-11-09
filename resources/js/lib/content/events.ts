/** One activity of the network, as stored in the events table. The source list is Arabic only, so these fields are not translated. */
export interface NetworkEvent {
    id: number;
    year: number;
    title: string;
    /** Date as written in the source list; null when it was not recorded. */
    date: string | null;
    place: string | null;
}

export function groupEventsByYear(events: NetworkEvent[]): { year: number; events: NetworkEvent[] }[] {
    const years = [...new Set(events.map((event) => event.year))];
    return years.map((year) => ({ year, events: events.filter((event) => event.year === year) }));
}
