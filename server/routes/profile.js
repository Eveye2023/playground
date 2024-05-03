const { pick } = require("lodash");
const middlewares = require("../middlewares/authMiddleware");

const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET /profile/ - protected route, needs auth
router.get("/", middlewares.authenticateToken, async (req, res) => {
  const { user } = req;

  // If token is valid, use the decoded payload, to get the info we need with the payload
  const { id, email, name } = await knex("user").where({ id: user.id }).first();
  res.status(200).json({ id, email, name });
});

router.put("/", middlewares.authenticateToken, async (req, res) => {
  const user = req.body;
  try {
    await knex("user").where({ email: user.email }).update({ name: user.name });
    res.status(201).send("Change has been saved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Sorry canot save the change");
  }
});

module.exports = router;
