import React from "react";

const PostCard = ({ user, post }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full  bg-[#484F48] text-[#CCC2A2] rounded-xl overflow-hidden mb-4">
      {/* Header with user profile */}
      <div className="relative flex">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-12 h-12 rounded-full absolute top-3 left-3"
        />
        <div className="ml-16 mt-3">
          <h2 className="font-semibold text-lg">{user.name}</h2>
          <p className="text-sm">@{user.username}</p>
        </div>
      </div>

      {/* Post content */}
      <div className="p-4">
        <p className="">{post.content}</p>
      </div>

      {/* Footer with post details */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <p className="text-sm 0">{formatDate(post.date)}</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 2l-1 11h-2L8 2m7 11H5m7 0h1l2 6m-3-6h-2m1 0v6"
            />
          </svg>
          <span>{post.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
