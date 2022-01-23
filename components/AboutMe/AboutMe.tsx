import { useTranslation } from '../../hooks/useTranslation';

export default function AboutMe() {
  const i18n = useTranslation();

  return (
    <section className="flex flex-col lg:my-20 my-5">
      <h1 className="flex justify-center lg:text-5xl text-3xl font-semibold mb-5 text-yellow-400">
        {i18n.MENU_ABOUT}
      </h1>
      <div className="flex lg:flex-row lg:justify-around flex-col-reverse items-center">
        <div className="lg:w-5/12 w-10/12 flex flex-col justify-center">
          <p className="flex lg:text-2xl text-lg leading-6 text-justify text-slate-50 lg:mb-5 my-5">
            {i18n.ABOUT_ME_ONE}
          </p>
          <p className="flex lg:text-2xl text-lg leading-6 text-justify text-slate-50">{i18n.ABOUT_ME_TWO}</p>
          <p className="flex lg:text-2xl text-lg leading-6 text-justify text-slate-50 lg:mb-5 mt-5">
            {i18n.ABOUT_ME_THREE}
          </p>
        </div>
        <img
          className="lg:w-5/12 w-10/12 rounded-full shadow-2xl"
          src="/images/photo3.jpg"
          alt="photo profile"
        />
      </div>
    </section>
  );
}
