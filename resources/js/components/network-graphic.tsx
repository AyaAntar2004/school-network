import { useTranslation } from '@/lib/i18n';

const CENTER = 200;

const polar = (radius: number, index: number, count: number, offset = 0) => {
    const angle = (index / count) * Math.PI * 2 + offset;
    return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) };
};

const inner = Array.from({ length: 6 }, (_, i) => polar(100, i, 6));
const outer = Array.from({ length: 12 }, (_, i) => polar(170, i, 12, Math.PI / 12));

/** A web of linked schools around an open book: the idea of a network that shares knowledge. */
export function NetworkGraphic() {
    const { t } = useTranslation();

    return (
        <svg viewBox="0 0 400 400" role="img" aria-label={t('guide.networkLabel')} className="mx-auto w-full max-w-md">
            <circle cx={CENTER} cy={CENTER} r="100" fill="none" className="stroke-mist-300" strokeDasharray="4 6" />
            <circle cx={CENTER} cy={CENTER} r="170" fill="none" className="stroke-mist-300" strokeDasharray="4 6" />

            <g style={{ transformOrigin: `${CENTER}px ${CENTER}px` }} className="animate-orbit-slow">
                <g className="stroke-brand-300" strokeWidth="1.5">
                    {inner.map((node, i) => (
                        <line key={`hub-${i}`} x1={CENTER} y1={CENTER} x2={node.x} y2={node.y} />
                    ))}
                    {outer.map((node, i) => {
                        const near = inner[Math.round(i / 2) % inner.length];
                        const next = outer[(i + 1) % outer.length];
                        return (
                            <g key={`out-${i}`}>
                                <line x1={near.x} y1={near.y} x2={node.x} y2={node.y} />
                                <line x1={node.x} y1={node.y} x2={next.x} y2={next.y} strokeDasharray="3 5" />
                            </g>
                        );
                    })}
                </g>
                {inner.map((node, i) => (
                    <circle key={`in-${i}`} cx={node.x} cy={node.y} r="13" style={{ animationDelay: `${i * 400}ms` }} className="animate-pulse fill-plum-700" />
                ))}
                {outer.map((node, i) => (
                    <circle key={`ou-${i}`} cx={node.x} cy={node.y} r="9" style={{ animationDelay: `${i * 300}ms` }} className="animate-pulse fill-brand-600" />
                ))}
            </g>

            <circle cx={CENTER} cy={CENTER} r="38" className="fill-plum-950" />
            <g transform={`translate(${CENTER - 24} ${CENTER - 18}) scale(0.4)`} fill="none" strokeLinejoin="round" strokeLinecap="round" className="stroke-white" strokeWidth="7">
                <path d="M60 20C45 10 25 10 8 16v58c17-6 37-6 52 4z" />
                <path d="M60 20c15-10 35-10 52-4v58c-17-6-37-6-52 4z" />
            </g>
        </svg>
    );
}
