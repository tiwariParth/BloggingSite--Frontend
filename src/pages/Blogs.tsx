import React from "react";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";

const Blogs = () => {
  return (
    <div>
      <AppBar />
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="max-w-xl">
          <BlogCard
            title={"How to make a blog using React and TailwindCSS"}
            authorName={"Parth"}
            publishedAt={"21 Feb 2024"}
            content={
              "This is a blog post about how to make a blog using React and TailwindCSS. It's a very simple process that only takes a few minutes to set up. You can use this blog post as a template for your own blog, or you can customize it to fit your needs. Either way, I hope you find this blog post helpful!"
            }
          />
        </div>
        <div className=" max-w-xl">
          <BlogCard
            title={"How to make a blog using React and TailwindCSS"}
            authorName={"Parth"}
            publishedAt={"21 Feb 2024"}
            content={
              "This is a blog post about how to make a blog using React and TailwindCSS. It's a very simple process that only takes a few minutes to set up. You can use this blog post as a template for your own blog, or you can customize it to fit your needs. Either way, I hope you find this blog post helpful!"
            }
          />
        </div>
        <div className=" max-w-xl">
          <BlogCard
            title={"How to make a blog using React and TailwindCSS"}
            authorName={"Parth"}
            publishedAt={"21 Feb 2024"}
            content={
              "This is a blog post about how to make a blog using React and TailwindCSS. It's a very simple process that only takes a few minutes to set up. You can use this blog post as a template for your own blog, or you can customize it to fit your needs. Either way, I hope you find this blog post helpful!"
            }
          />
        </div>
        <div className=" max-w-xl">
          <BlogCard
            title={"How to make a blog using React and TailwindCSS"}
            authorName={"Parth"}
            publishedAt={"21 Feb 2024"}
            content={
              "This is a blog post about how to make a blog using React and TailwindCSS. It's a very simple process that only takes a few minutes to set up. You can use this blog post as a template for your own blog, or you can customize it to fit your needs. Either way, I hope you find this blog post helpful!"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
