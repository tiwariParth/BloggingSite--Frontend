import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import BlogMain from "../components/BlogMain";
import Appbar from "../components/AppBar";
import Spinner from "../components/Spinner";
const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <Appbar />

        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <BlogMain blog={blog} />
    </div>
  );
};

export default Blog;
