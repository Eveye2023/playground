const router = require('express').Router();
const bcrypt = require('bcryptjs');
const knex = require("knex")(require("../knexfile"));
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

// POST /auth/signup
router.post('/signup', async (req, res) => {
    // Take the user info from req.body
    const { email, password } = req.body;

    // Validate the user info to not be empty
    if (!email || !password) {
        return res.status(400).send("Please include all the required fields");
    }

    // Encrypt the password
    const encryptedPassword = bcrypt.hashSync(password, 8);

   
    try {
        //Check if user already exist
        const response = await knex('user').where({ email: email }).first()
        console.log(response);
        if(response){
            res.status(400).send("User already exist.");
            return;
        }

        // Insert into database
        await knex('user').insert({
            email,
            password: encryptedPassword
        });

        // Response with success status code
        res.status(201).send("Registered successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send('Sorry cant create the user now');
    }
});

// POST /auth/login
router.post('/login', async (req, res) => {
    // Get username and password from req.body
    const { email, password } = req.body;

    // Validate email/password required fields
    if (!email || !password) {
        return res.status(400).send("Please include all the required fields");
    }

    // Check if the user exists (if not, return 404)
    const user = await knex('user').where({ email }).first();
    if (!user) {
        return res.status(404).send("User not found");
    }

    // If the user exists, check if their password is correct (if not, return 401)
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(401).send("User credentials are wrong");
    }

    // The user auth checks out, return a signed token (with user info)
    const userToken = {
        id: user.id,
        username: user.username,
        name: user.name
    }
    const authToken = jwt.sign(
        userToken,
        JWT_SECRET,
        { expiresIn: "30m" }
    );

    // Send the token back to the user
    res.status(200).json({ token: authToken });
});

module.exports = router;