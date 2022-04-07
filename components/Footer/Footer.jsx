/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { LIST_CONTACT } from '../../utils/constants';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <main className="flex flex-col place-content-center h-64 dark:bg-gray-900 bg-gray-100">
      <div className="flex flex-row justify-center">
        {LIST_CONTACT.map(({ href, src, key, alt }) => (
          <a href={href} key={key}>
            <img className="h-12 my-4 mx-4 cursor-pointer" src={src} alt={alt} />
          </a>
        ))}
      </div>
      <div className="flex justify-center my-5 text-gray-600">{year} - Design & Code by LeoDev5</div>
    </main>
  );
}
