import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpUser } from "@tiwariparth/zod-test";
import InputBox from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "../config/config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInputs] = useState<SignUpUser>({
    email: "",
    password: "",
    name: "",
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type}`,
        postInput
      );
      console.log(response.data);
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center flex-col">
      <h1 className=" text-4xl text-center font-extrabold ">
        {type === "signup" ? "Create an account" : "Login to your account"}
      </h1>
      <div>
        <p className="text-slate-400 text-center ">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            className="underline"
            to={type === "signin" ? "/signup" : "/signin"}
          >
            {type === "signin" ? "Sign Up" : "Login"}
          </Link>
        </p>
      </div>
      <div className=" flex flex-col max-w-md mt-[2rem] ml-[8rem]">
        {type === "signup" ? (
          <InputBox
            label="Username"
            placeholder="Enter your name"
            type="text"
            onChange={(e) =>
              setPostInputs({
                ...postInput,
                name: e.target.value,
              })
            }
          />
        ) : null}
        <InputBox
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) =>
            setPostInputs({
              ...postInput,
              email: e.target.value,
            })
          }
        />
        <InputBox
          label="Password"
          type="password"
          placeholder="Enter a password"
          onChange={(e) =>
            setPostInputs({
              ...postInput,
              password: e.target.value,
            })
          }
        />
        <button
          onClick={sendRequest}
          className="bg-slate-900 hover:bg-black text-white font-bold py-2 px-4 border border-black-700 rounded-lg"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
