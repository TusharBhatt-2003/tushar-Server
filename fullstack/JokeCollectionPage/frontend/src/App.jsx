import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div className="flex  flex-col justify-center items-center gap-5 h-screen bg-[#1A1A1A]">
        <div className="text-[#E8D8C9] text-center space-y-5">
          <h1 className="text-4xl font-extrabold uppercase border-b border-[#E8D8C9] p-2">
            Jokes collection
          </h1>
          <p className="text-2xl text-[#4C5F7F] font-bold uppercase">
            Jokes:{" "}
            <span className="font-thin text-[#F3711D] ">{jokes.length}</span>
          </p>
        </div>

        <div className="overflow-auto space-y-5 hidescroll w-1/3 h-[55%] flex flex-col items-center">
          {jokes.map((joke, i) => (
            <div
              key={joke.id}
              className="w-full rounded-2xl text-start p-5 space-y-2 bg-[#4C5F7F]"
            >
              <h1 className="text-2xl text-[#F3711D] font-extrabold uppercase">
                {joke.title}
              </h1>
              <p className="text-xl font-semibold text-[#E8D8C9] ">
                {joke.joke}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
