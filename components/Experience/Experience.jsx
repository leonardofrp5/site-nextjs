/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useTranslation } from '../../hooks/useTranslation';

export default function Experience() {
  const i18n = useTranslation();

  const variants = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const item = {
    hidden: {
      y: '200%',
      transition: { type: 'spring', stiffness: 100 }
    },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <main
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
          className="flex lg:justify-start justify-center lg:text-5xl text-3xl font-semibold mb-20 dark:text-slate-50 text-gray-600 underline decoration-yellow-400 decoration-2x"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          {i18n.MENU_EXPERIENCE}
        </motion.h2>
        <div className="flex flex-row justify-around items-center">
          <img className="h-12 object-fill mb-6" src="/images/accenture.png" alt={i18n.LOGO_ACCENTURE} />
          <img className="h-20 object-fill" src="/images/wolox.png" alt={i18n.LOGO_WOLOX} />
          <img className="h-9 object-fill" src="/images/aigroup.png" alt={i18n.LOGO_AIGROUP} />
        </div>
      </motion.div>
    </main>
  );
}
