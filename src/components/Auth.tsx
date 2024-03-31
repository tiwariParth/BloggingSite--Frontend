import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpUser } from "@tiwariparth/zod-test";
import Button from "./Button";
import InputBox from "./InputBox";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInput, setPostInputs] = useState<SignUpUser>({
    email: "",
    password: "",
    name: " ",
  });
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
        <Button label={"Submit"} />
      </div>
    </div>
  );
};

export default Auth;
