import header from './header.module.css';

export default function Header() {
  return (
    <div className={header.container}>
      <div>Logo</div>
      <div>
        <ul className={header.listMenu}>
          <li className={header.itemList}>About Me</li>
          <li className={header.itemList}>Experience</li>
          <li className={header.itemList}>Skills</li>
        </ul>
      </div>
    </div>
  );
}
