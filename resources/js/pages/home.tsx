import { Head, Link } from '@inertiajs/react';
import { ArrowRight, GraduationCap, Quote, ShieldAlert, Sprout, Users } from 'lucide-react';
import { CastleHero } from '@/components/castle-hero';
import { CtaBand } from '@/components/cta-band';
import { EventTimeline } from '@/components/event-timeline';
import { ExploreCard } from '@/components/explore-card';
import { KenBurnsImage } from '@/components/ken-burns-image';
import { LebanonOrbit } from '@/components/lebanon-orbit';
import { NewsTile } from '@/components/news-tile';
import { PointItem } from '@/components/point-item';
import { Reveal } from '@/components/reveal';
import { SchoolCircle } from '@/components/school-circle';
import { SectionHeading } from '@/components/section-heading';
import { StatRing } from '@/components/stat-ring';
import { Button } from '@/components/ui/button';
import SiteLayout from '@/layouts/site-layout';
import type { NetworkEvent } from '@/lib/content/events';
import { useTranslation } from '@/lib/i18n';
import { mockPosts, mockSchoolTypeCounts, mockSchools, mockStats, mockTheme } from '@/lib/mock-data';
import { exploreCards, schoolsHref } from '@/lib/nav';
import { schoolTypeImages } from '@/lib/school-types';
import type { AnnualTheme, Post, School, SchoolTypeCount, Stat } from '@/types/ssn';

interface HomeProps {
    stats?: Stat[];
    theme?: AnnualTheme;
    schoolTypeCounts?: SchoolTypeCount[];
    schools?: School[];
    posts?: Post[];
    /** The most recent events, newest first. */
    events?: NetworkEvent[];
}

const sectionClass = 'mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16';
const textLinkClass = 'inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900';

export default function Home({
    stats = mockStats,
    theme = mockTheme,
    schoolTypeCounts = mockSchoolTypeCounts,
    schools = mockSchools,
    posts = mockPosts,
    events = [],
}: HomeProps) {
    const { t, l } = useTranslation();

    const benefits = [
        { icon: GraduationCap, title: t('benefits.development.title'), text: t('benefits.development.text') },
        { icon: ShieldAlert, title: t('benefits.crisis.title'), text: t('benefits.crisis.text') },
        { icon: Sprout, title: t('benefits.sustainability.title'), text: t('benefits.sustainability.text') },
        { icon: Users, title: t('benefits.engagement.title'), text: t('benefits.engagement.text') },
    ];

    return (
        <SiteLayout>
            <Head title={t('brand.name')} />

            <CastleHero />

            <section id="map" className={sectionClass}>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <Reveal from="left">
                        <SectionHeading eyebrow={t('map.eyebrow')} title={t('map.title')} />
                        <p className="mt-6 max-w-lg leading-relaxed text-stone-700">{t('map.text')}</p>
                    </Reveal>
                    <Reveal from="zoom" delay={150}>
                        <LebanonOrbit schools={schools} />
                    </Reveal>
                </div>
            </section>

            <section aria-labelledby="stats-heading" className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-10 lg:px-16">
                <h2 id="stats-heading" className="sr-only">
                    {t('stats.title')}
                </h2>
                <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-10 lg:justify-between">
                    {stats.map((stat, index) => (
                        <Reveal key={stat.key} from="zoom" delay={index * 140}>
                            <StatRing value={stat.value} grouped={stat.grouped} label={t(`stat.${stat.key}`)} />
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className={sectionClass}>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <Reveal from="left" className="relative mx-auto aspect-square w-full max-w-md">
                        <div className="relative size-full overflow-hidden rounded-full ring-8 ring-white">
                            <KenBurnsImage src="/images/photos/11.jpg" origin="40% 45%" />
                        </div>
                        <div className="absolute -bottom-4 -end-4 size-2/5 animate-bob overflow-hidden rounded-full ring-8 ring-mist-50 sm:-end-10">
                            <KenBurnsImage src="/images/photos/17.jpg" origin="55% 35%" />
                        </div>
                    </Reveal>
                    <Reveal from="right" delay={150}>
                        <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} />
                        <p className="mt-6 leading-relaxed text-stone-700">{t('about.text')}</p>
                        <p className="mt-4 leading-relaxed text-stone-700">{t('about.text2')}</p>
                        <figure className="mt-8 flex gap-4">
                            <Quote className="mt-1 size-8 shrink-0 text-brand-800 rtl:-scale-x-100" aria-hidden="true" />
                            <div>
                                <blockquote className="text-xl font-medium leading-relaxed text-plum-950">{t('about.quote')}</blockquote>
                                <figcaption className="mt-2 text-sm font-semibold text-brand-900">— {t('about.quoteAuthor')}</figcaption>
                            </div>
                        </figure>
                        <Link href="/about" className={`${textLinkClass} mt-8`}>
                            {t('about.link')}
                            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="bg-plum-950 text-white">
                <div className={sectionClass}>
                    <Reveal className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-end">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">{t('explore.eyebrow')}</p>
                            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">{t('explore.title')}</h2>
                        </div>
                        <p className="max-w-md leading-relaxed text-plum-100">{t('explore.text')}</p>
                    </Reveal>
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {exploreCards.map((card, index) => (
                            <Reveal key={card.href} from="zoom" delay={index * 150}>
                                <ExploreCard title={t(card.title)} href={card.href} image={card.image} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-24 sm:px-6 lg:px-8">
                <Reveal className="relative isolate mx-auto flex min-h-[32rem] max-w-7xl items-center overflow-hidden rounded-[3rem] p-8 text-white sm:rounded-[4rem] sm:p-16">
                    <KenBurnsImage src="/images/photos/8.jpg" origin="30% 70%" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-plum-950/90 via-plum-900/70 to-plum-900/20 rtl:bg-gradient-to-l" />
                    <div className="relative flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between rtl:lg:flex-row-reverse">
                    <div className="max-w-xl">
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-200">
                            {t('theme.eyebrow')} · {t('theme.yearLabel')} {theme.year}
                        </p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{l(theme.title)}</h2>
                        <p className="mt-5 text-lg leading-relaxed text-plum-100">{l(theme.description)}</p>
                        <p className="mt-3 text-sm leading-relaxed text-plum-200">{t('theme.text')}</p>
                        <Button asChild variant="outlineLight" size="lg" className="mt-8">
                            <Link href="/annual-theme">{t('theme.link')}</Link>
                        </Button>
                    </div>

                    <ul className="flex w-full shrink-0 flex-col gap-3 lg:w-[25rem]">
                        {posts.slice(0, 3).map((post, index) => (
                            <li key={post.id} style={{ animationDelay: `${index * 150}ms` }}>
                                <Link
                                    href={`/news/${post.slug}`}
                                    className="group flex overflow-hidden rounded-3xl border border-white/10 bg-plum-950/75 backdrop-blur-md transition hover:-translate-x-1 hover:bg-plum-900/90"
                                >
                                    <span className="flex min-w-0 flex-1 flex-col items-start gap-2 p-4">
                                        <span className="rounded-full border border-white/40 px-3 py-0.5 text-xs font-semibold text-white">
                                            {t(post.type === 'news' ? 'post.news' : 'post.event_report')}
                                        </span>
                                        <span className="line-clamp-3 text-sm font-semibold leading-snug text-white">{l(post.title)}</span>
                                    </span>
                                    {post.image_url && (
                                        <img
                                            src={post.image_url}
                                            alt=""
                                            loading="lazy"
                                            className="w-32 shrink-0 object-cover transition duration-[2500ms] ease-out group-hover:scale-110"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                </Reveal>
            </section>

            <section className={sectionClass}>
                <div className="grid gap-16 lg:grid-cols-[2fr_3fr]">
                    <Reveal>
                        <SectionHeading eyebrow={t('benefits.eyebrow')} title={t('benefits.title')} />
                    </Reveal>
                    <ol>
                        {benefits.map((benefit, index) => (
                            <Reveal as="li" key={benefit.title} delay={index * 120}>
                                <PointItem {...benefit} isLast={index === benefits.length - 1} />
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <section className={sectionClass}>
                <Reveal>
                    <SectionHeading eyebrow={t('types.eyebrow')} title={t('types.title')} align="center" />
                </Reveal>
                <ul className="mt-16 flex flex-wrap justify-center gap-8">
                    {schoolTypeCounts.map(({ type, count }, index) => (
                        <Reveal as="li" key={type} delay={index * 110}>
                            <div className="group relative size-44 overflow-hidden rounded-full ring-4 ring-white transition duration-500 hover:scale-105 sm:size-52">
                                <img
                                    src={schoolTypeImages[type]}
                                    alt=""
                                    loading="lazy"
                                    className="absolute inset-0 size-full object-cover transition duration-[3000ms] ease-out group-hover:scale-110"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-plum-950/65 transition group-hover:bg-brand-800/70" />
                                <p className="relative flex size-full flex-col items-center justify-center text-center text-white">
                                    <span className="text-5xl font-bold">{count}</span>
                                    <span className="mt-1 text-sm font-semibold">{t(`type.${type}`)}</span>
                                    <span className="text-xs text-plum-100">{t('types.schoolsCount')}</span>
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </ul>
            </section>

            <section className={sectionClass}>
                <Reveal>
                    <SectionHeading eyebrow={t('schools.eyebrow')} title={t('schools.title')} align="center" />
                </Reveal>
                <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-12">
                    {schools.map((school, index) => (
                        <Reveal key={school.id} delay={index * 100} className={index % 2 === 1 ? 'lg:mt-14' : undefined}>
                            <SchoolCircle school={school} />
                        </Reveal>
                    ))}
                </div>
                <div className="mt-14 text-center">
                    <Button asChild size="lg">
                        <Link href={schoolsHref}>{t('type.viewAll')}</Link>
                    </Button>
                </div>
            </section>

            <section className={sectionClass}>
                <Reveal className="flex flex-wrap items-end justify-between gap-4">
                    <SectionHeading eyebrow={t('news.eyebrow')} title={t('news.title')} />
                    <Link href="/news" className={textLinkClass}>
                        {t('news.all')}
                        <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                </Reveal>
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {posts.slice(0, 3).map((post, index) => (
                        <Reveal key={post.id} delay={index * 140} className={index === 0 ? 'lg:row-span-2' : undefined}>
                            <NewsTile post={post} featured={index === 0} />
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className={sectionClass}>
                <Reveal className="flex flex-wrap items-end justify-between gap-4">
                    <SectionHeading eyebrow={t('events.homeEyebrow')} title={t('events.homeTitle')} />
                    <Link href="/events" className={textLinkClass}>
                        {t('events.all')}
                        <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                </Reveal>
                <div className="mt-12 max-w-4xl">
                    <EventTimeline events={events} showYear />
                </div>
            </section>

            <Reveal>
                <CtaBand title={t('cta.title')} text={t('cta.text')} />
            </Reveal>
        </SiteLayout>
    );
}
