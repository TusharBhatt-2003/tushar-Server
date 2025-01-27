import CreatePost from "./CreatePost";
import PostContainer from "./PostContainer";

const Posts = () => {
  return (
    <div className="h-screen w-full md:w-4/6 bg-[#484F48] ">
      <div className="h-screen flex flex-col items-center justify-center w-full  bg-[#C7C9C6] text-[#324539] md:rounded-r-3xl px-5 pt-5">
        <CreatePost />
        <PostContainer />
      </div>
    </div>
  );
};

export default Posts;
