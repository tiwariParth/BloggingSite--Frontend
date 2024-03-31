import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 border border-black-700 rounded-lg transition-[0.5s]">
      {label}
    </button>
  );
};

export default Button;
