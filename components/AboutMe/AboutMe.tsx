import { motion } from 'framer-motion';

import { useTranslation } from '../../hooks/useTranslation';

export default function AboutMe() {
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
    <main className="flex place-content-center ">
      <div className="container flex flex-col lg:my-20 my-5 py-4 px-4">
        <h1 className="flex justify-center lg:text-5xl text-3xl font-semibold mb-5 text-blue-500">
          {i18n.MENU_ABOUT}
        </h1>
        <div className="flex lg:flex-row lg:justify-between flex-col-reverse items-center">
          <motion.div
            className="lg:w-5/12 w-10/12 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            transition={variants}
          >
            <motion.span
              className="text-gray-600 flex lg:text-xl text-lg leading-6 text-justify dark:text-slate-50 lg:mb-5 my-5"
              style={{ display: 'inline-block' }}
              variants={item}
            >
              {i18n.ABOUT_ME_ONE}
            </motion.span>
            <motion.span
              className="text-gray-600 flex lg:text-xl text-lg leading-6 text-justify dark:text-slate-50"
              style={{ display: 'inline-block' }}
              variants={item}
            >
              {i18n.ABOUT_ME_TWO}
            </motion.span>
            <motion.span
              className="text-gray-600 flex lg:text-xl text-lg leading-6 text-justify dark:text-slate-50 lg:mb-5 mt-5"
              style={{ display: 'inline-block' }}
              variants={item}
            >
              {i18n.ABOUT_ME_THREE}
            </motion.span>
          </motion.div>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-4/12 w-10/12 rounded-full shadow-2xl"
            src="/images/photo3.jpg"
            alt="photo profile"
          />
        </div>
      </div>
    </main>
  );
}
