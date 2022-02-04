import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from 'next-themes';

export default function Header() {
  const { locale } = useRouter();
  const i18n = useTranslation();
  const { theme, setTheme } = useTheme();
  const dark = theme === 'dark' ? true : false;
  const [statusTheme, setStatusTheme] = useState(dark);

  const changedTheme = () => {
    if (statusTheme) {
      setStatusTheme(false);
    } else {
      setStatusTheme(true);
    }
  };

  useEffect(() => {
    setTheme(statusTheme ? 'dark' : 'light');
  }, [statusTheme, setTheme]);

  return (
    <header className="flex place-content-center ">
      <div className="container flex flex-col gap-1 lg:flex-row place-content-between bg-gray-100 lg:rounded-lg lg:mx-2 lg:mt-4 items-center dark:bg-gray-900 light:bg-blue">
        <Link href="/" locale={locale}>
          <a className=">text-slate-50 lg:p-6 p-4 hover:opacity-90 font-bold lg:text-3xl text-xl relative after:content-['Dev5'] after:text-black after:bg-yellow-400 after:px-1 after:ml-0.5">
            Leo
          </a>
        </Link>
        <div>
          <Link href={`/#${i18n.MENU_ABOUT_LINK}`} locale={locale}>
            <a className=">text-gray-600 dark:text-slate-50 lg:p-6 p-2 lg:text-xl text-base cursor-pointer dark:hover:text-yellow-300">
              {i18n.MENU_ABOUT}
            </a>
          </Link>
          <Link href={`/#${i18n.MENU_EXPERIENCE}`} locale={locale}>
            <a className=">text-gray-600 dark:text-slate-50 lg:p-6 p-2 lg:text-xl text-base cursor-pointer transition-colors dark:hover:text-yellow-300">
              {i18n.MENU_EXPERIENCE}
            </a>
          </Link>
          <Link href={`/#${i18n.MENU_SKILLS}`} locale={locale}>
            <a className=">text-gray-600 dark:text-slate-50 lg:p-6 p-2 lg:text-xl text-base cursor-pointer transition-colors dark:hover:text-yellow-300">
              {i18n.MENU_SKILLS}
            </a>
          </Link>
        </div>

        <div className="flex justify-items-end">
          <Image
            className="cursor-pointer"
            onClick={changedTheme}
            src={`/images/${statusTheme ? 'moon' : 'sun'}.png`}
            alt="flag-es"
            width={25}
            height={25}
          />
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
