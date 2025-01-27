import Profile from "./components/Profile";
import Posts from "./components/Posts";
import { UserProvider } from "./context/userContext";
import Aside from "./components/aside";

function App() {
  return (
    <UserProvider>
      <div className="flex mx-auto justify-center items-center w-full h-screen overflow-auto bg-[#C7C9C6] text-[#CCC2A2]">
        <Profile />
        <Posts />
        <Aside />
      </div>
    </UserProvider>
  );
}

export default App;
