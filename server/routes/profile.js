const { pick } = require("lodash");
const middlewares = require("../middlewares/authMiddleware");

const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET /profile/ - protected route, needs auth
router.get("/", middlewares.authenticateToken, async (req, res) => {
  const { user } = req;

  // If token is valid, use the decoded payload, to get the info we need with the payload
  const {id, email, name} = await knex("user").where({ id: user.id }).first();
  res.status(200).json({id, email, name});
});

module.exports = router;
