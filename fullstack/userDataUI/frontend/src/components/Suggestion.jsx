import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { loggedUserID } from "../loggedInUser"; // loggedUserID is the ID of the logged-in user

const Suggestion = () => {
  const users = useContext(UserContext); // Access users from context

  // Get the logged-in user by ID
  const currentUser = users.find((user) => user.id === loggedUserID);

  // Function to find similar-interest users
  const getSimilarInterestUsers = (users, currentUser) => {
    if (!currentUser || !users || users.length === 0) return [];

    // Filter users with similar interests, excluding the current user and already connected users
    const similarUsers = users.filter((user) => {
      // Check if the user is the logged-in user or already connected
      const isAlreadyConnected = currentUser.connections?.includes(user.id);
      if (user.id === currentUser.id || isAlreadyConnected) return false;

      // Check for shared interests
      return user.interests.some((interest) =>
        currentUser.interests.includes(interest),
      );
    });

    return similarUsers.slice(0, 4); // Limit to 4 suggestions
  };

  const suggestedUsers = getSimilarInterestUsers(users, currentUser); // Get suggestions for the logged-in user

  return (
    <div className="h-1/3 p-4">
      <h2 className="text-base font-bold mb-2">Suggested Connections</h2>
      <div className="space-y-3">
        {suggestedUsers.length > 0 ? (
          suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-3 border-b border-[#CCC2A2] pb-2"
            >
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-bold">{user.name}</h3>
                <p className="text-xs font-thin opacity-70">@{user.username}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-500">
            No similar-interest users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
