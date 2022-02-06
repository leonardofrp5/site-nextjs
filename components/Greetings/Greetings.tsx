/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

import { useTranslation } from '../../hooks/useTranslation';
import styles from './styles.module.css';

export default function Greetings() {
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
    <div className={`${styles.greeting} flex place-content-center h-screen items-center text-center`}>
      <motion.div
        className="container flex flex-col lg:my-20 my-5 py-4 px-4 pb-10"
        initial="hidden"
        animate="visible"
        transition={variants}
      >
        <motion.h2
          className="flex justify-center lg:text-7xl text-3xl font-semibold dark:text-slate-50 text-gray-600"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          Hi, 👋 I am Leonardo Romero
        </motion.h2>
        {/* <span className="text-3xl">Designing is more fun when you do it with code.</span> */}
      </motion.div>
    </div>
  );
}
