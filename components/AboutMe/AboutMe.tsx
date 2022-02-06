import { motion } from 'framer-motion';

import { useTranslation } from '../../hooks/useTranslation';
import { variants, item } from '../../utils/animations';

export default function AboutMe() {
  const i18n = useTranslation();

  return (
    <section id={i18n.MENU_ABOUT_LINK} className="flex place-content-center">
      <motion.div
        className="container flex flex-col lg:my-20 my-5 py-4 px-4"
        initial="hidden"
        animate="visible"
        transition={variants}
      >
        <motion.h2
          className="flex lg:justify-start justify-center lg:text-5xl text-3xl font-semibold mb-5 dark:text-slate-50 text-gray-600 border-b-4 border-yellow-400 py-2 w-max"
          style={{ display: 'inline-block' }}
          variants={item}
        >
          {i18n.MENU_ABOUT}
        </motion.h2>
        <div className="flex lg:flex-row lg:justify-between flex-col-reverse items-center">
          <div className="lg:w-7/12 w-10/12 flex flex-col justify-center">
            <motion.p
              className="text-gray-600 flex lg:text-xl text-lg leading-6 lg:leading-6 text-justify dark:text-slate-50 lg:mb-5 my-5"
              style={{ display: 'inline-block' }}
              variants={item}
            >
              {i18n.ABOUT_ME_ONE}
            </motion.p>
            <motion.p
              className="text-gray-600 flex lg:text-xl text-lg leading-6 lg:leading-6 text-justify dark:text-slate-50"
              style={{ display: 'inline-block' }}
              variants={item}
            >
              {i18n.ABOUT_ME_TWO}
            </motion.p>
            <motion.p
              className="text-gray-600 flex lg:text-xl text-lg leading-6 lg:leading-6 text-justify dark:text-slate-50 lg:mb-5 mt-5"
              style={{ display: 'inline-block' }}
              variants={item}
            >
              {i18n.ABOUT_ME_THREE}
            </motion.p>
          </div>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-4/12 w-10/12 shadow-2xl"
            src="/images/photo3.jpg"
            alt="photo profile"
          />
        </div>
      </motion.div>
    </section>
  );
}
