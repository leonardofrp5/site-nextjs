import footer from './footer.module.css';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={footer.container}>
      <span>Fabricated by Leonardo Romero Copyright © {year}</span>
    </div>
  );
}
