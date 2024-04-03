import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";
import BlogSkeleton from "../components/BlogSkeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              title={blog.title}
              authorName={blog.author.name || "Unknown"}
              publishedAt={"21 Feb 2024"}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
