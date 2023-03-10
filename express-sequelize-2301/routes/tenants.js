const express = require("express");
const router = express.Router();
const { Tenant, Rental } = require("../db");

// TODO: set our routes

// tenant read all (READ)
router.get("/", async (req, res) => {
  try {
    const tenants = await Tenant.findAll();

    res.send(tenants);
  } catch (error) {
    console.error(error);
  }
});

// TODO: define 1 percent route
router.get("/1-percent", async (req, res) => {
  try {
    // example of eager loading
    const richTenants = await Tenant.findRich();

    res.send(richTenants);
  } catch (error) {
    console.error(error);
  }
});

// tenant read one (READ)
router.get("/:id", async (req, res, next) => {
  try {
    // example of eager loading
    const tenant = await Tenant.findByPk(req.params.id, {
      include: Rental,
    });

    if (tenant) {
      res.send(tenant);
    } else {
      next({ status: 404, message: "Tenant is not found" });
    }
  } catch (error) {
    next(error);
  }
});

// tenant create one (CREATE)
router.post("/", async (req, res) => {
  try {
    const tenant = await Tenant.create(req.body);

    res.send(tenant);
  } catch (error) {
    console.error(error);
  }
});

// tenant update one (UPDATE)
router.put("/:id", async (req, res) => {
  try {
    const tenant = await Tenant.findByPk(req.params.id);
    await tenant.update(req.body);

    res.send(tenant);
  } catch (error) {
    console.error(error);
  }
});

// tenant delete one (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const tenant = await Tenant.findByPk(req.params.id);
    await tenant.destroy();

    res.send(`Tenant with ${req.params.id} has been deleted`);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
