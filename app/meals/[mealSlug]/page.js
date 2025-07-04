import Image from 'next/image';
import {getMeal} from '@/lib/meals'
import css from './MealDetail.module.css'
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }
  
  return {
    title: meal.title,
    description: meal.summary,
  }
};

export default async function MealPage({ params }) {
  console.log("params MealSlug: ", params);
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions? meal.instructions.replace(/\n/g, '<br/>') : '';

    return (
      <>
      <header className={css.header}>
        <div className={css.image}>
          <Image src={meal.image} alt={meal.title} fill/>
        </div>
        <div className={css.headerText}>
          <h1>{meal.title}</h1>
          <p className={css.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={css.summary}>Summary</p>
        </div>
      </header>
      <main>
        <p className={css.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}></p>
      </main>
      </>
    );
  }
  