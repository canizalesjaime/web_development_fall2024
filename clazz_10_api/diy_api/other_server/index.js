import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 8080;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/random");
    const result = response.data;
    console.log(response);
    res.send(`<h1> ${result.jokeText} </h1>`);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.send("<h1> error </h1>");
  }
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});