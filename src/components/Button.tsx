import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-slate-900 hover:bg-black text-white font-bold py-2 px-4 border border-black-700 rounded-lg">
      {label}
    </button>
  );
};

export default Button;
