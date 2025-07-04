import MealItem from './meal-item'
import css from './meals-grid.module.css'

export default function MealsGrid({meals}) {
  return (
    <ul className={css.meals}>
      {Object.keys(meals).map((mealId) => (
        <li key={mealId}>
          <MealItem {...meals[mealId]} />
        </li>
      ))}
    </ul>
  );
}
