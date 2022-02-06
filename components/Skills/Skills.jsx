/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

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
          className="flex lg:justify-start justify-center lg:text-5xl text-3xl font-semibold mb-20 dark:text-slate-50 text-gray-600 underline decoration-yellow-400 decoration-2x"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          {i18n.MENU_SKILLS}
        </motion.h2>
        <div className="flex flex-row justify-around flex-wrap w-3/5 m-auto">
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/html5.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/css3.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/sass.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/tailwind.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/js.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/ts.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/react.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/redux.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/saga.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/jest.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/testing_library.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/nextjs.png" />
          <img className="h-20 m-5 opacity-20 hover:opacity-100" src="/images/vercel.svg" />
        </div>
      </motion.div>
    </main>
  );
}
