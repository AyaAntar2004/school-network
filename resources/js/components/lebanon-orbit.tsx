import { useTranslation, type TranslationKey } from '@/lib/i18n';
import { lebanonPath, lebanonPlaces, lebanonViewBox } from '@/lib/lebanon';
import type { School } from '@/types/ssn';

const places = Object.keys(lebanonPlaces) as (keyof typeof lebanonPlaces)[];

/**
 * Lebanon drifting in a small circle at the centre of two rings that keep turning,
 * with school photos orbiting on the outer one. The photos are counter-rotated to stay upright.
 */
export function LebanonOrbit({ schools }: { schools: School[] }) {
    const { t } = useTranslation();
    const orbiting = schools.slice(0, 5);

    return (
        <div
            role="img"
            aria-label={t('map.imageLabel')}
            style={{ containerType: 'inline-size' }}
            className="relative mx-auto aspect-square w-full max-w-xl"
        >
            <div aria-hidden="true" className="absolute inset-[4%] animate-orbit rounded-full border-2 border-dashed border-mist-300" />
            <div aria-hidden="true" className="absolute inset-[20%] animate-orbit-reverse rounded-full border border-mist-300" />
            <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-gradient-to-br from-white to-mist-100 shadow-inner" />

            <div aria-hidden="true" className="absolute inset-0 animate-orbit-fast">
                {orbiting.map((school, index) => {
                    const angle = (360 / orbiting.length) * index;
                    return (
                        <div
                            key={school.id}
                            className="absolute start-1/2 top-1/2 size-0"
                            style={{ transform: `rotate(${angle}deg) translateY(-43cqw)` }}
                        >
                            <div style={{ transform: `rotate(${-angle}deg)` }}>
                                <div className="animate-orbit-fast-reverse">
                                    <img
                                        src={school.image_url}
                                        alt=""
                                        loading="lazy"
                                        className="-ms-[7cqw] -mt-[7cqw] size-[14cqw] max-w-none rounded-full object-cover ring-4 ring-white"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <div className="animate-circle-move">
                    <svg
                        viewBox={lebanonViewBox}
                        style={{ direction: 'ltr', overflow: 'visible' }}
                        className="h-[52cqw] w-auto drop-shadow-xl"
                    >
                        <defs>
                            <linearGradient id="lebanon-fill" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="var(--color-plum-400)" />
                                <stop offset="1" stopColor="var(--color-plum-700)" />
                            </linearGradient>
                        </defs>
                        <path d={lebanonPath} fill="url(#lebanon-fill)" stroke="white" strokeWidth="0.8" strokeLinejoin="round" />
                        {places.map((place) => {
                            const { x, y } = lebanonPlaces[place];
                            const isSidon = place === 'sidon';
                            return (
                                <g key={place}>
                                    {isSidon && (
                                        <circle
                                            cx={x}
                                            cy={y}
                                            r="3"
                                            className="animate-ping fill-brand-400"
                                            style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
                                        />
                                    )}
                                    <circle cx={x} cy={y} r={isSidon ? 2.2 : 1.2} className={isSidon ? 'fill-brand-500' : 'fill-white'} stroke="white" strokeWidth="0.6" />
                                    <text
                                        x={isSidon ? x - 3.5 : x + 2.5}
                                        y={y + 1.2}
                                        textAnchor={isSidon ? 'end' : 'start'}
                                        fontSize={isSidon ? 4.6 : 3.4}
                                        fontWeight={isSidon ? 700 : 500}
                                        className="fill-white"
                                        stroke={isSidon ? 'var(--color-brand-800)' : 'var(--color-plum-900)'}
                                        strokeWidth={isSidon ? 1.4 : 0.9}
                                        paintOrder="stroke"
                                    >
                                        {t(`place.${place}` as TranslationKey)}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                </div>
            </div>
        </div>
    );
}
