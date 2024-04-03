import { ChangeEvent, ChangeEventHandler, useState } from "react";
import AppBar from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config/config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <div className="flex flex-col justify-center mx-[3rem] my-2 gap-2">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-[50%] p-2.5"
          placeholder="Title"
          required
        />
        <Texteditor onChange={(e) => setContent(e.target.value)} />
        <div>
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.blog}`);
            }}
            type="submit"
            className=" flex text-center px-5 py-2.5 text-sm font-medium  text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

export const Texteditor = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div>
      <textarea
        onChange={onChange}
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default Publish;
