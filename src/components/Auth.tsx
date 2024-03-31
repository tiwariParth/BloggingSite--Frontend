import { ChangeEvent } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpUser } from "@tiwariparth/zod-test";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInput, setPostInputs] = useState<SignUpUser>({
    email: "",
    password: "",
    name: " ",
  });
  return (
    <div className="flex h-screen justify-center flex-col">
      <h1 className=" text-4xl text-center font-extrabold ">
        Create an account
      </h1>
      <p className="text-slate-400 text-center ">
        Already have an account?{" "}
        <Link className="underline" to={"/signin"}>
          Login
        </Link>
      </p>
      <div className=" flex flex-col max-w-md mt-[2rem] ml-[8rem]">
        <InputBox
          label="Username"
          placeholder="Enter your name"
          onChange={(e) =>
            setPostInputs({
              ...postInput,
              name: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({ label, placeholder, onChange }: InputBoxProps) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <label className="block mb-2 text-lg font-bold">{label}</label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Auth;
