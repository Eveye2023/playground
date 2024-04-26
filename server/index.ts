require("dotenv").config();
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})
  
app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});
  