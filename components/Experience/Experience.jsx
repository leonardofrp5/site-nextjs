/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

import { useTranslation } from '../../hooks/useTranslation';
import { variants, item } from '../../utils/animations';

export default function Experience() {
  const i18n = useTranslation();

  return (
    <section
      id={i18n.MENU_EXPERIENCE}
      className="flex place-content-center border-t dark:border-slate-700 border-gray-200"
    >
      <motion.div
        className="container flex flex-col lg:my-20 my-5 py-4 px-4 pb-10"
        initial="hidden"
        animate="visible"
        transition={variants}
      >
        <motion.h2
          className="flex lg:justify-start justify-center lg:text-5xl text-3xl font-semibold mb-20 dark:text-slate-50 text-gray-600 border-b-4 border-yellow-400 py-2 w-max"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          {i18n.MENU_EXPERIENCE}
        </motion.h2>
        <div className="flex flex-row flex-wrap justify-around items-center">
          <img
            className="h-12 object-fill lg:mb-6 mb-6"
            src="/images/accenture.png"
            alt={i18n.LOGO_ACCENTURE}
          />
          <img className="h-20 object-fill lg:mb-0 mb-6" src="/images/wolox.png" alt={i18n.LOGO_WOLOX} />
          <img className="h-9 object-fill lg:mb-0 mb-6" src="/images/aigroup.png" alt={i18n.LOGO_AIGROUP} />
        </div>
      </motion.div>
    </section>
  );
}
