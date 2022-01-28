import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from '../../hooks/useTranslation';

export default function Header() {
  const { locale } = useRouter();
  const i18n = useTranslation();

  return (
    <header className="flex place-content-center ">
      <div className="container flex flex-col gap-1 lg:flex-row place-content-between bg-gray-100 lg:rounded-lg lg:mx-2 lg:mt-4 items-center dark:bg-gray-900 light:bg-blue">
        <Link href="/" locale={locale}>
          <a className="text-slate-50 lg:p-6 p-4 hover:opacity-90 font-bold lg:text-3xl text-xl relative after:content-['Dev5'] after:text-black after:bg-yellow-400 after:px-1 after:ml-0.5">
            Leo
          </a>
        </Link>
        <div>
          <ul className="flex list-none">
            <li className="text-zinc-800 dark:text-slate-50 lg:p-6 p-2 lg:text-xl text-base cursor-pointer">
              {i18n.MENU_ABOUT}
            </li>
            <li className="text-zinc-800 dark:text-slate-50 lg:p-6 p-2 lg:text-xl text-base cursor-pointer">
              {i18n.MENU_EXPERIENCE}
            </li>
            <li className="text-zinc-800 dark:text-slate-500 lg:p-6 p-2 lg:text-xl text-base cursor-pointer">
              {i18n.MENU_SKILLS}
            </li>
          </ul>
        </div>
        <div className="flex justify-items-end">
          <Link href="/" locale="en">
            <a className="lg:py-6 lg:px-3 py-2 px-1">
              <Image src="/images/flag-en.png" alt="flag-us" width={25} height={25} />
            </a>
          </Link>
          <Link href="/" locale="es">
            <a className="lg:py-6 lg:px-3 py-2 px-1">
              <Image src="/images/flag-es.png" alt="flag-es" width={25} height={25} />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
