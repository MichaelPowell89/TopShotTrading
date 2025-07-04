import Link from "next/link";
import css from "./meals.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse delicious meals shared by our vibrant community",
};

async function GetMeals() {
  const meals = await getMeals();
  const mealsArray = meals ? Object.values(meals) : [];

  return <MealsGrid meals={mealsArray} />;
}

export default function Meals() {
  return (
    <>
      <header className={css.header}>
        <h1>
          Delicious meals, created {""}
          <span className={css.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={css.cta}>
          <Link href="/meals/share">Share your Favourite Recipe</Link>
        </p>
      </header>
      <main className={css.main}>
        <Suspense fallback={<p className={css.loading}>Fetching Meals</p>}>
          <GetMeals />
        </Suspense>
      </main>
    </>
  );
}
