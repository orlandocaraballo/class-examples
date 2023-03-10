const { db, Tenant, Rental } = require("../db");

(async () => {
  // syncs all models with the database
  await db.sync({ force: true });

  // create some tenants
  const orlando = await Tenant.create({
    name: "Orlando 🎩",
    age: 39,
    salary: 1_000_000,
  });

  const patrisha = await Tenant.create({
    name: "Patrisha 💵",
    age: 39,
    salary: 800_000,
  });

  const will = await Tenant.create({
    name: "Will 😎",
    age: 22,
    salary: 80_000,
  });

  // create some rentals
  const budgetApt = await Rental.create({
    address: "1245 Elm St, Somewhereville, Hometown 14588",
    price: 1500,
    bedrooms: 0,
  });

  const reasonableApt = await Rental.create({
    address: "1245 Marlin ave, Boston, Massachusetts 24231",
    price: 2000,
    bedrooms: 2,
  });

  const luxuryApt = await Rental.create({
    address: "50 Park Ave, New York NY 10003",
    price: 10_000,
    bedrooms: 10,
  });

  await orlando.setRentals([luxuryApt]);
  await patrisha.setRentals([luxuryApt]);
  await will.setRentals([budgetApt, reasonableApt]);
})();
