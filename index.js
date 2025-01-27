require("dotenv").config();
const express = require("express");
const app = express();
const port = 2003;

const gitHubData = {
  login: "TusharBhatt-2003",
  id: 112729468,
  node_id: "U_kgDOBrgdfA",
  avatar_url: "https://avatars.githubusercontent.com/u/112729468?v=4",
  html_url: "https://github.com/TusharBhatt-2003",
  name: "Tushar Bhatt",
  bio: "A Frontend Web Developer\nJust learning new things every day.\n🦋",
  blog: "tushar-bhatt.vercel.app",
  location: "Faridabad",
  public_repos: 42,
  followers: 1,
  following: 2,
  created_at: "2022-09-02T20:21:08Z",
  updated_at: "2024-11-26T19:25:18Z",
};

app.set("view engine", "ejs"); // Use EJS for rendering the profile page

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Serve the GitHub profile page
app.get("/github/profile", (req, res) => {
  res.render("profile", { gitHubData });
});

// Serve the GitHub avatar image
app.get("/github/avatar", (req, res) => {
  res.send(`<img src="${gitHubData.avatar_url}" alt="Avatar">`);
});

// Serve more user info
app.get("/github/info", (req, res) => {
  res.json({
    name: gitHubData.name,
    bio: gitHubData.bio,
    location: gitHubData.location,
    blog: gitHubData.blog,
    followers: gitHubData.followers,
    following: gitHubData.following,
    public_repos: gitHubData.public_repos,
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
