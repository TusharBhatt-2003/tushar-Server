import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { loggedUserID } from "../loggedInUser"; // Make sure this points to the current logged-in user's ID

const Profile = () => {
  const users = useContext(UserContext);

  // Get the logged-in user using the loggedUserID dynamically
  const user =
    users.length > 0 ? users.find((user) => user.id === loggedUserID) : null;

  return (
    <div className="hidden lg:flex flex-col justify-between items-center h-screen w-full md:w-1/6 px-2 py-5 bg-[#484F48] md:rounded-r-3xl">
      {user ? (
        <>
          <div className="space-y-5">
            <div className="w-full grid place-content-center text-center mt-2">
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-32 h-32 justify-self-center rounded-full object-cover border-[#CCC2A2] border-4"
              />
              <h1 className="text-2xl font-extrabold">{user.name}</h1>
              <p className="text-lg font-light">{user.username}</p>
            </div>

            <div className="w-full grid gap-5 place-content-center mt-2">
              <p className="border-2 border-[#CCC2A2] rounded-lg py-2 px-2 text-base font-medium">
                {user.bio}
              </p>
              <ul className="flex flex-wrap gap-1">
                {user.interests?.map((interest, index) => (
                  <li
                    key={index}
                    className="bg-[#CCC2A2] text-[#484F48] rounded px-1"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm font-thin">
            {user.address.city}, {user.address.state}, {user.address.country}
          </p>
        </>
      ) : (
        <p>Loading user data...</p> // Display loading text if user data is not available
      )}
    </div>
  );
};

export default Profile;
