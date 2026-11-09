import { useTranslation } from '@/lib/i18n';
import type { School } from '@/types/ssn';

/** A member school shown as a round photo with its name and type beneath. */
export function SchoolCircle({ school }: { school: School }) {
    const { t, l } = useTranslation();

    return (
        <figure className="group flex w-48 flex-col items-center text-center sm:w-56">
            <div className="relative size-44 overflow-hidden rounded-full ring-4 ring-white transition duration-500 group-hover:-translate-y-2 group-hover:ring-brand-300 sm:size-52">
                <img
                    src={school.image_url}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition duration-[3000ms] ease-out group-hover:scale-110"
                />
            </div>
            <figcaption className="mt-4">
                <p className="font-bold text-plum-950">{l(school.name)}</p>
                <p className="mt-1 flex items-center justify-center gap-2 text-sm text-stone-700">
                    <span aria-hidden="true" className="size-2 rounded-full bg-brand-600" />
                    {t(`type.${school.type}`)}
                </p>
            </figcaption>
        </figure>
    );
}
