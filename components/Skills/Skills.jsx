/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

import { useTranslation } from '../../hooks/useTranslation';
import { LIST_SKILLS } from '../../utils/constants';
import { variants, item } from '../../utils/animations';

export default function Experience() {
  const i18n = useTranslation();

  return (
    <section
      id={i18n.MENU_SKILLS}
      className="flex place-content-center border-t dark:border-slate-700 border-gray-200"
    >
      <motion.div
        className="container flex flex-col lg:my-20 my-5 py-4 px-4"
        initial="hidden"
        animate="visible"
        transition={variants}
      >
        <motion.h2
          className="flex lg:justify-start justify-center lg:text-5xl text-3xl font-semibold mb-20 dark:text-slate-50 text-gray-600 border-b-4 border-yellow-400 py-2 w-max"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          {i18n.MENU_SKILLS}
        </motion.h2>
        <div className="flex flex-row justify-around flex-wrap lg:w-3/5 m-auto">
          {LIST_SKILLS.map(({ src, alt, key }) => (
            <img className="h-20 m-5 opacity-20 hover:opacity-100" src={src} key={key} alt={alt} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
