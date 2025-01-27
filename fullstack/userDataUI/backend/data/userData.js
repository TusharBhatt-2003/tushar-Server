const usersData = [
  {
    id: 1,
    name: "Alice Johnson",
    username: "alice_j",
    email: "alice.johnson@example.com",
    password: "password123",
    bio: "Tech enthusiast, bookworm, and coffee lover.",
    interests: ["Coding", "Photography", "Traveling"],
    activeWorking: true,
    address: {
      street: "123 Elm St",
      city: "Springfield",
      state: "IL",
      zip: "62704",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/7d/97/9b/7d979b9482422312387ea6f4a0f23135.jpg",
    lastLogin: "2024-12-01T08:45:00Z",
    createdAt: "2022-03-15T14:20:00Z",
    posts: [
      {
        id: 1,
        content: "Loving the new tech gadget I just bought! #TechEnthusiast",
        date: "2024-12-01T10:00:00Z",
        likesCount: 12,
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    username: "bsmith",
    email: "bob.smith@example.com",
    password: "securepass456",
    bio: "Cycling addict and web developer.",
    interests: ["Cycling", "Web Development", "Gaming"],
    activeWorking: false,
    address: {
      street: "456 Maple Dr",
      city: "Columbus",
      state: "OH",
      zip: "43215",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/52/ec/0b/52ec0b531d64ff80cdb3435658a71767.jpg",
    lastLogin: "2024-11-29T21:15:00Z",
    createdAt: "2021-07-19T11:10:00Z",
    posts: [
      {
        id: 2,
        content:
          "Started reading a new book on photography. Excited to learn more!",
        date: "2024-11-25T15:30:00Z",
        likesCount: 8,
      },
    ],
  },
  {
    id: 3,
    name: "Charlotte Brown",
    username: "char_b",
    email: "charlotte.brown@example.com",
    password: "charlie2024",
    bio: "Digital artist creating magic with colors.",
    interests: ["Art", "Graphic Design", "Yoga"],
    activeWorking: true,
    address: {
      street: "789 Oak Ln",
      city: "Austin",
      state: "TX",
      zip: "73301",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/8e/10/13/8e101302c628e975ac3e8d2e8e3ba0aa.jpg",
    lastLogin: "2024-12-02T07:30:00Z",
    createdAt: "2023-02-10T09:25:00Z",
    posts: [
      {
        id: 3,
        content:
          "Just finished a new digital painting. Can't wait to share it soon!",
        date: "2024-12-02T09:00:00Z",
        likesCount: 15,
      },
    ],
  },
  {
    id: 4,
    name: "Daniel Martinez",
    username: "danny_m",
    email: "daniel.martinez@example.com",
    password: "daniel@work",
    bio: "Passionate about AI and machine learning.",
    interests: ["AI", "Machine Learning", "Chess"],
    activeWorking: false,
    address: {
      street: "101 Pine Rd",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/ca/e4/fb/cae4fb8c940ee48ffded10175abbb092.jpg",
    lastLogin: "2024-11-28T13:00:00Z",
    createdAt: "2020-12-05T08:15:00Z",
    posts: [
      {
        id: 4,
        content: "Exploring AI in-depth today, the possibilities are endless!",
        date: "2024-11-30T14:45:00Z",
        likesCount: 5,
      },
    ],
  },
  {
    id: 5,
    name: "Evelyn Davis",
    username: "evelyn_d",
    email: "evelyn.davis@example.com",
    password: "evelyn@123",
    bio: "Lover of all things nature and poetry.",
    interests: ["Nature", "Poetry", "Hiking"],
    activeWorking: true,
    address: {
      street: "321 Cedar Ct",
      city: "Denver",
      state: "CO",
      zip: "80202",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/05/bc/58/05bc58f836e78d5a2ba3c5e8e863b9bf.jpg",
    lastLogin: "2024-12-02T10:00:00Z",
    createdAt: "2023-06-01T14:50:00Z",
    posts: [
      {
        id: 5,
        content:
          "A peaceful hike in the mountains today. Nature is so calming.",
        date: "2024-12-02T11:20:00Z",
        likesCount: 18,
      },
    ],
  },
  {
    id: 6,
    name: "Franklin Harris",
    username: "frank_h",
    email: "franklin.harris@example.com",
    password: "frank2024",
    bio: "History buff with a knack for cooking.",
    interests: ["History", "Cooking", "Reading"],
    activeWorking: false,
    address: {
      street: "654 Spruce Ave",
      city: "Phoenix",
      state: "AZ",
      zip: "85001",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/39/c3/2e/39c32e8f30ab96f8e0566b46aa88ae81.jpg",
    lastLogin: "2024-11-27T18:45:00Z",
    createdAt: "2021-09-12T17:30:00Z",
    posts: [
      {
        id: 6,
        content:
          "Just made a fantastic beef stew for dinner. Cooking is so therapeutic!",
        date: "2024-11-28T17:00:00Z",
        likesCount: 7,
      },
    ],
  },
  {
    id: 7,
    name: "Grace Lee",
    username: "grace_l",
    email: "grace.lee@example.com",
    password: "graceLee@1",
    bio: "Avid reader and aspiring novelist.",
    interests: ["Writing", "Reading", "Meditation"],
    activeWorking: true,
    address: {
      street: "987 Birch Blvd",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/originals/88/7a/f6/887af6ec26699944e06a0af8eca04a09.gif",
    lastLogin: "2024-12-01T19:30:00Z",
    createdAt: "2022-11-15T12:10:00Z",
    posts: [
      {
        id: 7,
        content: "Starting my first novel today! Wish me luck!",
        date: "2024-12-01T13:00:00Z",
        likesCount: 22,
      },
    ],
  },
  {
    id: 8,
    name: "Henry Wilson",
    username: "henry_w",
    email: "henry.wilson@example.com",
    password: "henryTheGreat",
    bio: "Engineer with a love for classical music.",
    interests: ["Engineering", "Classical Music", "Hiking"],
    activeWorking: true,
    address: {
      street: "111 Walnut Way",
      city: "Boston",
      state: "MA",
      zip: "02108",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg",
    lastLogin: "2024-12-02T05:20:00Z",
    createdAt: "2020-01-20T13:00:00Z",
    posts: [
      {
        id: 8,
        content:
          "Listening to some Beethoven to start the day. #ClassicalMusic",
        date: "2024-12-02T07:15:00Z",
        likesCount: 10,
      },
    ],
  },
  {
    id: 9,
    name: "Dexter Morgan",
    username: "dext",
    email: "isabella.taylor@example.com",
    password: "bellaT2024!",
    bio: "Everyone has a code. Mine just happens to involve plastic sheets.",
    interests: ["Blood", "Homicide", "Knife", "Analyzing crime scenes"],
    activeWorking: true,
    address: {
      street: "456 Chestnut Cir",
      city: "Miami",
      state: "FL",
      zip: "90001",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/1b/d7/6a/1bd76a304465594eb62690f91a125734.jpg",
    lastLogin: "2024-11-30T09:15:00Z",
    createdAt: "2022-02-23T12:45:00Z",
    posts: [
      {
        id: 9,
        content: "Just finished a 30-minute meditation. Feeling so refreshed!",
        date: "2024-11-30T10:00:00Z",
        likesCount: 14,
      },
    ],
  },
  {
    id: 10,
    name: "Jackie Moore",
    username: "jackie_m",
    email: "jackie.moore@example.com",
    password: "jackie2024",
    bio: "Coffee lover, part-time gamer, and full-time software developer.",
    interests: ["Gaming", "Coding", "Coffee"],
    activeWorking: false,
    address: {
      street: "321 Birch Ln",
      city: "Chicago",
      state: "IL",
      zip: "60601",
      country: "USA",
    },
    profilePicture:
      "https://i.pinimg.com/736x/7f/c7/46/7fc746fdade3ab01012cf817efc22ee5.jpg",
    lastLogin: "2024-11-29T22:30:00Z",
    createdAt: "2019-06-01T16:00:00Z",
    posts: [
      {
        id: 10,
        content:
          "Excited for the weekend gaming session with friends! #GamingLife",
        date: "2024-11-29T21:00:00Z",
        likesCount: 20,
      },
    ],
  },
];

// Function to assign random connections
const assignConnections = (users) => {
  users.forEach((user) => {
    // Get all other users except the current user
    const otherUsers = users.filter((u) => u.id !== user.id);
    // Shuffle and select 2 to 6 users as connections
    const connections = otherUsers
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 5) + 2)
      .map((u) => u.id); // Store only user IDs
    user.connections = connections; // Add connections to the user
  });
};

assignConnections(usersData);

console.log(usersData);

export default usersData;
