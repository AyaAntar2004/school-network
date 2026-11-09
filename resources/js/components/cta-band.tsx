import { useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { KenBurnsImage } from '@/components/ken-burns-image';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

interface CtaBandProps {
    title: string;
    text: string;
}

const fieldClass =
    'w-full rounded-3xl border border-white/30 bg-white/15 px-5 py-3 text-white backdrop-blur placeholder:text-white/70 focus:border-white focus:bg-white/25 focus:outline-none';

/** Closing "send us a message" form, set on a large photo of Sidon. */
export function CtaBand({ title, text }: CtaBandProps) {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, wasSuccessful, reset } = useForm({
        email: '',
        school: '',
        message: '',
    });

    const submit = (event: FormEvent) => {
        event.preventDefault();
        post('/contact-message', { preserveScroll: true, onSuccess: () => reset() });
    };

    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="relative mx-auto flex min-h-[28rem] max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[3rem] px-6 py-16 text-white sm:rounded-[4rem]">
                <KenBurnsImage src="/images/castle-2.jpg" origin="25% 60%" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-900/70 to-plum-900/40" />
                <div className="relative w-full max-w-2xl text-center">
                    <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-plum-100">{text}</p>

                    {wasSuccessful ? (
                        <p role="status" className="mt-8 rounded-full bg-white/20 px-6 py-4 text-lg font-medium backdrop-blur">
                            {t('contact.success')}
                        </p>
                    ) : (
                        <form onSubmit={submit} className="mt-8 grid gap-4 text-start">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="msg-email" className="sr-only">
                                        {t('contact.email')}
                                    </label>
                                    <input
                                        id="msg-email"
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder={t('contact.email')}
                                        className={`${fieldClass} rounded-full`}
                                    />
                                    {errors.email && <p className="mt-1 px-4 text-sm text-red-200">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="msg-school" className="sr-only">
                                        {t('contact.school')}
                                    </label>
                                    <input
                                        id="msg-school"
                                        type="text"
                                        required
                                        value={data.school}
                                        onChange={(e) => setData('school', e.target.value)}
                                        placeholder={t('contact.school')}
                                        className={`${fieldClass} rounded-full`}
                                    />
                                    {errors.school && <p className="mt-1 px-4 text-sm text-red-200">{errors.school}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="msg-message" className="sr-only">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    id="msg-message"
                                    required
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder={t('contact.message')}
                                    className={fieldClass}
                                />
                                {errors.message && <p className="mt-1 px-4 text-sm text-red-200">{errors.message}</p>}
                            </div>
                            <Button type="submit" size="lg" disabled={processing} className="justify-self-center">
                                {t('contact.send')}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
