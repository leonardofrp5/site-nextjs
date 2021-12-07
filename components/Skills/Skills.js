import skills from './skills.module.css';

import { SKILS_LIST } from './constants';

export default function Skills() {
  return (
    <main className={skills.container} id="habilidades">
      <h2 className={skills.title}>Habilidades</h2>
      <div className={skills.contentSkills}>
        {SKILS_LIST.map(({ name, image }) => (
          <div className={skills.contenLanguage} key={name}>
            <img src={image} className={skills.image} alt={name} />
          </div>
        ))}
      </div>
    </main>
  );
}
