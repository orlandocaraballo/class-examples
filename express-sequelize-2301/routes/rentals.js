const router = require("express").Router();
const { Rental, Tenant } = require("../db");

// create
router.post("/", async (req, res, next) => {
  // create a Rental
  try {
    res.send(await Rental.create(req.body));
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

// read
router.get("/", async (req, res, next) => {
  // get all Rentals
  try {
    res.send(await Rental.findAll());
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  // get a Rental
  let rental;

  try {
    // TODO: eager load people
    rental = await Rental.findByPk(req.params.id, {
      include: [
        {
          model: Tenant,
        },
      ],
    });

    if (!rental) {
      // next(error);
      // res.status(404).send("Could not find resource");
      // throw { status: 404, message: "Could not find resource" };
      next({ status: 404, message: "Could not find resource" });
      return;
    }

    res.send(rental);
  } catch (error) {
    next(error);
  }
});

// update
router.put("/:id", async (req, res, next) => {
  // update a Rental
  let rental;

  try {
    rental = await Rental.findByPk(req.params.id);

    if (!rental) {
      next({ status: 404, message: "Could not find resource" });
      return;
    }

    await rental.update(req.body);

    res.send(rental);
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

// delete
router.delete("/:id", async (req, res, next) => {
  // delete a Rental
  let rental;

  try {
    rental = await Rental.findByPk(req.params.id);

    if (!rental) {
      next({ status: 404, message: "Could not find resource" });
      return;
    }

    await rental.destroy();

    res.status(200).send();
  } catch (error) {
    // TODO: send to error middleware
    next(error);
  }
});

module.exports = router;
