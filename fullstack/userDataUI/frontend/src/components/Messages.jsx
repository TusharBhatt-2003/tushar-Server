import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { loggedUserID } from "../loggedInUser";

const Messages = () => {
  const users = useContext(UserContext); // Access users from context

  // Get the logged-in user's data using loggedUserID as ID, not index
  const loggedInUser = users.find((user) => user.id === loggedUserID);

  // Convert users array to a lookup object for quick access by user id
  const usersById = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-2 text-center">Messages</h1>

      {loggedInUser ? (
        <div className="mb-2 w-full max-w-md rounded-lg p-4">
          {loggedInUser.connections?.length > 0 ? (
            loggedInUser.connections.map((connectionId) => {
              const connectedUser = usersById[connectionId];
              return (
                connectedUser && (
                  <div
                    key={connectedUser.id}
                    className="flex items-center border-y w-full border-[#CCC2A2] py-2"
                  >
                    <img
                      src={connectedUser.profilePicture}
                      alt={connectedUser.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-light">{connectedUser.name}</p>
                    </div>
                  </div>
                )
              );
            })
          ) : (
            <p className="font-bold text-xl text-center">
              You have no connections yet. Connect with others to start
              chatting.
            </p>
          )}
        </div>
      ) : (
        <p className="font-bold text-xl text-center">
          Please Log In to view messages
        </p>
      )}
    </div>
  );
};

export default Messages;
