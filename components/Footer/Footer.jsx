import footer from './footer.module.css';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    // <div className={footer.container}>
    //   <span>Fabricated by Leonardo Romero Copyright © {year}</span>
    // </div>
    <main className="flex flex-col place-content-center h-80 border-t border-slate-50">
      <div className="flex flex-row justify-center">
        <img className="h-12 my-4 mx-4" src="/images/twitter_white.png" />
        <img className="h-12 my-4 mx-4" src="/images/github_white.png" />
        <img className="h-12 my-4 mx-4" src="/images/linkedin_white.png" />
      </div>
      <div className="flex justify-center my-5 ">© {year} - Design & Code by Leonardo Romero</div>
    </main>
  );
}
