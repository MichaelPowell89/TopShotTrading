// import fs from 'node:fs';

// import sql from 'better-sqlite3';
// import slugify from 'slugify';
// import xss from 'xss';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from '@/lib/storage';

// const db = sql('meals.db');

// export async function getMeals() {
//     // await new Promise((resolve) => setTimeout(resolve, 5000));

//     const response = await fetch(
//         "https://nextjs-d2470-default-rtdb.asia-southeast1.firebasedatabase.app/foodies.json"
//     );

//     console.log(response)
//     return await response.json();

//     //throw new Error('Loading Meals Failed');

//     // return db.prepare('SELECT * FROM meals').all();
// }

// export async function getMeal(slug) {
//     const response = await fetch(
//         "https://nextjs-d2470-default-rtdb.asia-southeast1.firebasedatabase.app/foodies.json"
//     );
//     console.log("slug: ", slug);

//     const data = await response.json();
//     const mealsArray = Object.values(data);
//     const meal = mealsArray.find((m) => slug && m.slug.trim().toLowerCase() === slug.trim().toLowerCase());
//     console.log("Meal: ", meal);

//     return meal;

//     // return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
// }

// // export async function saveMeal(meal) {
// //     const dateTime = new Date().getTime();

// //     meal.slug = slugify(meal.title + '-' + dateTime, {lower: true});
// //     meal.instructions = xss(meal.instructions);

// //     const extension = meal.image.name.split('.').pop();
// //     const fileName = `${meal.slug}_${dateTime}.${extension}`;

// //     const stream = fs.createWriteStream(`public/images/${fileName}`);
// //     const bufferedImage = await meal.image.arrayBuffer();

// //     stream.write(Buffer.from(bufferedImage), (error) => {
// //         if (error) {
// //             throw new Error('Saving image failed!');
// //         }
// //     });

// //     meal.image = `/images/${fileName}`

// //     db.prepare(`
// //         INSERT INTO meals
// //         (slug, title, image, summary, instructions, creator, creator_email)
// //         VALUES (
// //             @slug,
// //             @title,
// //             @image,
// //             @summary,
// //             @instructions,
// //             @creator,
// //             @creator_email
// //         )
// //     `).run(meal);
// // }

// export async function saveMeal(meal) {
//     const dateTime = new Date().getTime();

//     meal.slug = slugify(meal.title + '-' + dateTime, {lower: true});
//     meal.instructions = xss(meal.instructions);

//     const storageRef = ref(storage, `images/${meal.slug}`);
//     await uploadBytes(storageRef, meal.image);
//     meal.image = await getDownloadURL(storageRef);
    
//     fetch('https://nextjs-d2470-default-rtdb.asia-southeast1.firebasedatabase.app/foodies.json', {
//         method: 'POST',
//         body: JSON.stringify(meal),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }