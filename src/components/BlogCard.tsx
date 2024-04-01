import React from "react";

interface BlogCardProps {
  title: string;
  authorName: string;
  publishedAt: string;
  content: string;
}

const BlogCard = ({
  title,
  authorName,
  publishedAt,
  content,
}: BlogCardProps) => {
  return (
    <div className="border-b p-4 pb-2 border-slate-200">
      <div className="flex gap-2 items-center pb-2 ">
        <div className="flex flex-col justify-center">
          <Avatar authorName={authorName} />
        </div>
        <h6 className="font-extralight text-sm  text-gray-600">{authorName}</h6>
        <span className="font-extralight text-sm text-gray-600">
          . {publishedAt}
        </span>
      </div>
      <div className="font-semibold text-xl ">{title}</div>

      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-400 pt-3 text-sm font-thin">{`${Math.ceil(
        content.length / 100
      )} minute`}</div>
    </div>
  );
};

const Avatar = ({ authorName }: { authorName: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-thin text-gray-600 dark:text-gray-300">
        {authorName[0]}
      </span>
    </div>
  );
};

export default BlogCard;
