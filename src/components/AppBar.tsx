import { Avatar } from "./BlogCard";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between items-center py-4 px-10">
      <div>Medium</div>

      <div className=" flex gap-7">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 transition-all delay-75 rounded-full">
          Button
        </button>
        <Avatar authorName="Medium" size={"big"} />
      </div>
    </div>
  );
};

export default AppBar;
