"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  function invalidText(text) {
    return !text || text.trim() === "";
  }

  const meal = {
    slug: '',
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  const errors = {
    title: invalidText(meal.title),
    summary: invalidText(meal.summary),
    instructions: invalidText(meal.instructions),
    creator: invalidText(meal.creator),
    creator_email:
      invalidText(meal.creator_email) || !meal.creator_email.includes("@"),
    image: !meal.image || meal.image.size === 0,
  };

  if (Object.values(errors).some((error) => error)) {
    return {
        message: "Invalid Input.",
        errors
      };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect("/meals");
}
