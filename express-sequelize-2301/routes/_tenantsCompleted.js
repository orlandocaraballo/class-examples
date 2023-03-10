const router = require("express").Router();
const { Tenant } = require("../db");

// create
router.post("/", async (req, res) => {
  // create a Tenant
  try {
    res.send(await Tenant.create(req.body));
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// read
router.get("/", async (req, res) => {
  // get all people
  try {
    res.send(await Tenant.findAll());
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// TODO: define boomers route
router.get("/boomers", async (req, res) => {
  try {
    // TODO: set boomers variable using findBoomers()
    //  class method
    const boomers = await Tenant.findBoomers();

    res.send(boomers);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// TODO: define Tenant in dog years route
router.get("/:id/age-in-dog-years", async (req, res) => {
  // get a Tenant
  let tenant;

  try {
    tenant = await Tenant.findByPk(req.params.id);

    // TODO: set age in dog years using ageInDogYears()
    //  instance method
    tenant.age = await Tenant.ageInDogYears();

    // TODO: send 404 when not found
    res.send(tenant);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  // get a Tenant
  let tenant;

  try {
    // TODO: eager load meal
    tenant = await Tenant.findByPk(req.params.id);

    // TODO: send 404 when not found
    res.send(tenant);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  // update a Tenant
  let tenant;

  try {
    tenant = await Tenant.findByPk(req.params.id);

    await tenant.update(req.body);

    res.send(tenant);
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  // delete a Tenant
  let tenant;

  try {
    tenant = await Tenant.findByPk(req.params.id);

    await tenant.destroy();

    res.status(200).send();
  } catch (error) {
    // TODO: send to error middleware
    console.error(error);
  }
});

module.exports = router;
