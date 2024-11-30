require("dotenv").config();
const express = require("express");
const app = express();
const port = 2003;

const gitHubData = {
  login: "TusharBhatt-2003",
  id: 112729468,
  node_id: "U_kgDOBrgdfA",
  avatar_url: "https://avatars.githubusercontent.com/u/112729468?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/TusharBhatt-2003",
  html_url: "https://github.com/TusharBhatt-2003",
  followers_url: "https://api.github.com/users/TusharBhatt-2003/followers",
  following_url:
    "https://api.github.com/users/TusharBhatt-2003/following{/other_user}",
  gists_url: "https://api.github.com/users/TusharBhatt-2003/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/TusharBhatt-2003/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/TusharBhatt-2003/subscriptions",
  organizations_url: "https://api.github.com/users/TusharBhatt-2003/orgs",
  repos_url: "https://api.github.com/users/TusharBhatt-2003/repos",
  events_url: "https://api.github.com/users/TusharBhatt-2003/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/TusharBhatt-2003/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Tushar Bhatt",
  company: null,
  blog: "tushar-bhatt.vercel.app",
  location: "Faridabad ",
  email: null,
  hireable: null,
  bio: "A Frontend Web Developer\r\nJust learning new things everyday.\r\n🦋",
  twitter_username: null,
  public_repos: 42,
  public_gists: 0,
  followers: 1,
  following: 2,
  created_at: "2022-09-02T20:21:08Z",
  updated_at: "2024-11-26T19:25:18Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("tushar_bhatt");
});

app.get("/login", (req, res) => {
  res.send(`<h1>Please login at tushar's server</h1>`);
});

app.get("/chai", (req, res) => {
  res.send(`<h3>Chai pilo</h3>`);
});

app.get("/github", (req, res) => {
  res.json(gitHubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
