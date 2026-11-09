import { Head, Link, router } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/layouts/admin-layout';
import type { NetworkEvent } from '@/lib/content/events';
import { useTranslation } from '@/lib/i18n';

interface Paginator {
    data: NetworkEvent[];
    total: number;
    prev_page_url: string | null;
    next_page_url: string | null;
    current_page: number;
    last_page: number;
}

export default function EventsIndex({ events, search }: { events: Paginator; search: string }) {
    const { t } = useTranslation();
    const [query, setQuery] = useState(search);

    const submitSearch = (event: FormEvent) => {
        event.preventDefault();
        router.get('/admin/events', query ? { q: query } : {}, { preserveState: true });
    };

    const remove = (event: NetworkEvent) => {
        if (window.confirm(`${t('admin.confirmDelete')}\n\n${event.title}`)) {
            router.delete(`/admin/events/${event.id}`, { preserveScroll: true });
        }
    };

    return (
        <AdminLayout>
            <Head title={t('admin.events')} />

            <div className="flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-plum-950">
                    {t('admin.events')} <span className="text-lg font-normal text-stone-600">({events.total})</span>
                </h1>
                <Button asChild>
                    <Link href="/admin/events/create">{t('admin.add')}</Link>
                </Button>
            </div>

            <form onSubmit={submitSearch} className="mt-6 flex gap-3">
                <label htmlFor="q" className="sr-only">
                    {t('admin.search')}
                </label>
                <input
                    id="q"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('admin.search')}
                    className="h-11 min-w-0 flex-1 rounded-full border border-plum-900/20 bg-white px-5 placeholder:text-stone-500 focus:border-brand-600 focus:outline-none"
                />
                <Button type="submit" variant="outline">
                    {t('admin.searchButton')}
                </Button>
            </form>

            <div className="mt-6 overflow-x-auto rounded-3xl bg-white shadow-sm">
                <table className="w-full min-w-[40rem] text-start text-sm">
                    <thead className="bg-mist-100 text-plum-950">
                        <tr>
                            <th className="px-4 py-3 text-start">#</th>
                            <th className="px-4 py-3 text-start">{t('admin.field.year')}</th>
                            <th className="px-4 py-3 text-start">{t('admin.field.title')}</th>
                            <th className="px-4 py-3 text-start">{t('admin.field.date')}</th>
                            <th className="px-4 py-3 text-start">{t('admin.field.place')}</th>
                            <th className="px-4 py-3" />
                        </tr>
                    </thead>
                    <tbody>
                        {events.data.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-10 text-center text-stone-600">
                                    {t('admin.empty')}
                                </td>
                            </tr>
                        )}
                        {events.data.map((event) => (
                            <tr key={event.id} className="border-t border-plum-900/10 align-top">
                                <td className="px-4 py-3 text-stone-600">{event.id}</td>
                                <td className="px-4 py-3">{event.year}</td>
                                <td className="px-4 py-3 font-semibold text-plum-950">
                                    <bdi lang="ar">{event.title}</bdi>
                                </td>
                                <td className="px-4 py-3">{event.date ? <bdi lang="ar">{event.date}</bdi> : '—'}</td>
                                <td className="px-4 py-3">{event.place ? <bdi lang="ar">{event.place}</bdi> : '—'}</td>
                                <td className="whitespace-nowrap px-4 py-3 text-end">
                                    <Link href={`/admin/events/${event.id}/edit`} className="font-semibold text-brand-700 hover:underline">
                                        {t('admin.edit')}
                                    </Link>
                                    <button type="button" onClick={() => remove(event)} className="ms-4 font-semibold text-red-700 hover:underline">
                                        {t('admin.delete')}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {events.last_page > 1 && (
                <div className="mt-6 flex items-center justify-between">
                    <Button asChild variant="outline" className={events.prev_page_url ? '' : 'pointer-events-none opacity-40'}>
                        <Link href={events.prev_page_url ?? '#'} preserveScroll>
                            {t('admin.prev')}
                        </Link>
                    </Button>
                    <span className="text-sm text-stone-600">
                        {events.current_page} / {events.last_page}
                    </span>
                    <Button asChild variant="outline" className={events.next_page_url ? '' : 'pointer-events-none opacity-40'}>
                        <Link href={events.next_page_url ?? '#'} preserveScroll>
                            {t('admin.next')}
                        </Link>
                    </Button>
                </div>
            )}
        </AdminLayout>
    );
}
