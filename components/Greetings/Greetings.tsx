/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

import { useTranslation } from '../../hooks/useTranslation';
import { variants, item } from '../../utils/animations';
import styles from './styles.module.css';

export default function Greetings() {
  const i18n = useTranslation();

  return (
    <section className={`${styles.greeting} flex place-content-center h-screen items-center`}>
      <motion.div
        className="container flex flex-col lg:my-20 my-5 py-4 px-4 pb-10"
        initial="hidden"
        animate="visible"
        transition={variants}
      >
        <motion.h2
          className="flex justify-start lg:text-7xl text-3xl font-semibold dark:text-slate-50 text-gray-600"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          {i18n.GREETINGS_NAME}
        </motion.h2>
        <motion.span
          className="flex justify-start lg:text-3xl text-2xl my-5 text-yellow-400"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          {i18n.GREETINGS_ABOUT}
        </motion.span>
      </motion.div>
    </section>
  );
}
