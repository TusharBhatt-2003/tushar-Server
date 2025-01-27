import express from "express";
import usersData from "./data/userData.js";

const app = express();

app.get("/api/users", (req, res) => {
  res.send(usersData); // Use `res.json` for proper JSON response
});

const port = process.env.PORT || 1903;

console.log("Server is starting...");
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}/api/users`);
});
