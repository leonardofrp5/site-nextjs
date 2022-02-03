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
    <main className="flex place-content-center dark:bg-gray-900 bg-gray-100">
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
        <div className="flex flex-row justify-around max-h-max items-center">
          <img className="h-12 object-fill" src="/images/accenture.png" />
          <img className="h-20 object-fill" src="/images/wolox.png" />
          <img className="h-9 object-fill" src="/images/aigroup.png" />
        </div>
      </motion.div>
    </main>
  );
}
