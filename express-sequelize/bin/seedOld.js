const { db, Person, Meal } = require("../db/dbOld");

(async () => {
  // syncs all models with the database
  await db.sync({ force: true });

  // create some people
  const orlando = await Person.create({ name: "Orlando" });
  const patrisha = await Person.create({ name: "Patrisha" });
  const diana = await Person.create({ name: "Diana" });
  const janelly = await Person.create({ name: "Janelly" });
  const ainsley = await Person.create({ name: "Ainsley" });

  // crate some meals
  const mangu = await Meal.create({ name: "mangu 👀" });
  const ramen = await Meal.create({ name: "ramen 🍜" });
  const sangwich = await Meal.create({ name: "sangwich 😉" });
  const jerkChicken = await Meal.create({ name: "jerk chicken 🐔" });
  const sancocho = await Meal.create({ name: "sancocho 👍" });
  const steak = await Meal.create({ name: "steak 🐮" });

  // assign meals to people
  await mangu.setPerson(janelly);
  await ramen.setPerson(patrisha);
  await sangwich.setPerson(patrisha);
  await jerkChicken.setPerson(ainsley);
  await sancocho.setPerson(orlando);
  await steak.setPerson(orlando);
})();
