const jwt = require("jsonwebtoken");
module.exports = {
  authenticateToken: function (req, res, next) {
    const authHeader = req.headers["authorization"];
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
      return res.sendStatus(401);
    }
    const parsedToken = authHeader.slice("Bearer ".length);

    if (parsedToken == null) {
      return res.sendStatus(401);
    }

    try {
      const decodedPayload = jwt.verify(parsedToken, process.env.JWT_SECRET);
      req.user = decodedPayload;
      next();
    } catch (err) {
      console.error(err);
      res.status(401).send("Token you have provided is invalid");
    }
  },
};
