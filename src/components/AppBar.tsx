import { Avatar } from "./BlogCard";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between items-center py-4 px-10">
      <div>Medium</div>
      <div>
        <Avatar authorName="Medium" size={"6"} />
      </div>
    </div>
  );
};

export default AppBar;
