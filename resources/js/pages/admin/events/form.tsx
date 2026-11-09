import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/layouts/admin-layout';
import type { NetworkEvent } from '@/lib/content/events';
import { useTranslation } from '@/lib/i18n';

const inputClass =
    'h-12 w-full rounded-full border border-plum-900/20 bg-white px-5 text-stone-900 placeholder:text-stone-500 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15';

/** Create or edit one event; `event` is null when creating. */
export default function EventForm({ event }: { event: NetworkEvent | null }) {
    const { t } = useTranslation();
    const { data, setData, post, put, processing, errors } = useForm({
        year: event?.year ?? new Date().getFullYear(),
        title: event?.title ?? '',
        date: event?.date ?? '',
        place: event?.place ?? '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (event) {
            put(`/admin/events/${event.id}`);
        } else {
            post('/admin/events');
        }
    };

    const field = (id: 'year' | 'title' | 'date' | 'place', label: string, props: React.ComponentProps<'input'> = {}) => (
        <div>
            <label htmlFor={id} className="mb-1.5 block px-2 text-sm font-semibold">
                {label}
            </label>
            <input
                id={id}
                lang={id === 'year' ? undefined : 'ar'}
                value={data[id]}
                onChange={(e) => setData(id, id === 'year' ? Number(e.target.value) : e.target.value)}
                className={inputClass}
                {...props}
            />
            {errors[id] && <p className="mt-1 px-2 text-sm text-red-700">{errors[id]}</p>}
        </div>
    );

    return (
        <AdminLayout>
            <Head title={event ? t('admin.editEvent') : t('admin.newEvent')} />
            <h1 className="text-3xl font-bold text-plum-950">{event ? t('admin.editEvent') : t('admin.newEvent')}</h1>

            <form onSubmit={submit} className="mt-8 max-w-2xl space-y-5 rounded-[2rem] bg-white p-8 shadow-sm">
                {field('year', t('admin.field.year'), { type: 'number', required: true, min: 1990, max: 2100 })}
                {field('title', t('admin.field.title'), { required: true, maxLength: 255 })}
                {field('date', t('admin.field.date'), { maxLength: 255 })}
                <p className="-mt-3 px-2 text-xs text-stone-600">{t('admin.field.dateHint')}</p>
                {field('place', t('admin.field.place'), { maxLength: 255 })}

                <div className="flex gap-3 pt-2">
                    <Button type="submit" disabled={processing}>
                        {t('admin.save')}
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/admin/events">{t('admin.cancel')}</Link>
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
