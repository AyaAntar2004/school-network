import { Head, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

const inputClass =
    'h-12 w-full rounded-full border border-plum-900/20 bg-white px-5 text-stone-900 placeholder:text-stone-500 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15';

export default function Login() {
    const { t, locale, dir } = useTranslation();
    const { data, setData, post, processing, errors } = useForm({ email: '', password: '', remember: false });

    const submit = (event: FormEvent) => {
        event.preventDefault();
        post('/admin/login');
    };

    return (
        <div dir={dir} lang={locale} className="flex min-h-screen items-center justify-center bg-mist-50 px-6">
            <Head title={t('admin.login.title')} />
            <form onSubmit={submit} className="w-full max-w-md space-y-5 rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">
                <h1 className="text-2xl font-bold text-plum-950">{t('admin.login.title')}</h1>

                <div>
                    <label htmlFor="email" className="mb-1.5 block px-2 text-sm font-semibold">
                        {t('admin.field.email')}
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        autoFocus
                        autoComplete="username"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className={inputClass}
                    />
                    {errors.email && <p className="mt-1 px-2 text-sm text-red-700">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="mb-1.5 block px-2 text-sm font-semibold">
                        {t('admin.field.password')}
                    </label>
                    <input
                        id="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className={inputClass}
                    />
                    {errors.password && <p className="mt-1 px-2 text-sm text-red-700">{errors.password}</p>}
                </div>

                <label className="flex items-center gap-2 px-2 text-sm">
                    <input type="checkbox" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} className="size-4 accent-brand-600" />
                    {t('admin.remember')}
                </label>

                <Button type="submit" disabled={processing} className="w-full">
                    {t('admin.signIn')}
                </Button>
            </form>
        </div>
    );
}
