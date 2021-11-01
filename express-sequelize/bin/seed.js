const { db, Person, Meal } = require("../db");

(async () => {
  // syncs all models with the database
  await db.sync({ force: true });

  // create some people
  const orlando = await Person.create({ name: "Orlando", age: 37 });
  const patrisha = await Person.create({ name: "Patrisha", age: 37 });
  const diana = await Person.create({ name: "Diana", age: 24 });
  const janelly = await Person.create({ name: "Janelly", age: 22 });

  // crate some meals
  const mangu = await Meal.create({ name: "mangu 👀" });
  const ramen = await Meal.create({ name: "ramen 🍜" });
  const sangwich = await Meal.create({ name: "sangwich 😉" });
  const jerkChicken = await Meal.create({ name: "jerk chicken 🐔" });
  const sancocho = await Meal.create({ name: "sancocho 👍" });
  const steak = await Meal.create({ name: "steak 🐮" });
  const tacos = await Meal.create({ name: "tacos 🌮" });

  // assign meals to people
  await orlando.setMeals([mangu, ramen, jerkChicken, sancocho]);
  await janelly.setMeals([mangu]);
  await diana.setMeals([steak]);
  await patrisha.setMeals([tacos]);
})();
