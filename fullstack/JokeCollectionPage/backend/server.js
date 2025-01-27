import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is up');
// })

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Classic Chicken",
      joke: "Why was the chicken crossing the road? To get to the other side.",
    },
    {
      id: 2,
      title: "Award-Winning Scarecrow",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
      id: 3,
      title: "Blushing Tomato",
      joke: "Why did the tomato turn red? Because it saw the salad dressing.",
    },
    {
      id: 4,
      title: "Stellar Scorpion",
      joke: "Why did the scorpion win an award? Because he was outstanding in his field.",
    },
    {
      id: 5,
      title: "Road-Crossing Chicken",
      joke: "Why did the chicken cross the road? To get to the other side.",
    },
    {
      id: 6,
      title: "Outstanding Scarecrow",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 2003;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}/api/jokes`);
});
