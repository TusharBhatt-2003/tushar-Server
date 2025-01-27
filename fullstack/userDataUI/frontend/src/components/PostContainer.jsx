import { useContext } from "react";

import PostCard from "./PostCard"; // Import PostCard
import { UserContext } from "../context/userContext";

const PostContainer = () => {
  const users = useContext(UserContext); // Access users data from context

  if (!users || users.length === 0) return <p>No users available</p>; // Handle empty state

  return (
    <div className="h-screen md:h-[80%] w-full overflow-y-auto my-5 rounded-xl hidescroll">
      {users.map((user) => {
        return user.posts.map((post) => (
          <PostCard key={post.id} user={user} post={post} /> // Pass user and post as props
        ));
      })}
    </div>
  );
};

export default PostContainer;
