import Link from 'next/link';
import Image from 'next/image';

import css from './firearm-item.module.css';

export default function FirearmItem({ title, slug, image, summary, creator }) {
  return (
    <article className={css.firearm}>
      <header>
        <div className={css.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={css.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={css.content}>
        <p className={css.summary}>{summary}</p>
        <div className={css.actions}>
          <Link href={`/catalogue/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}