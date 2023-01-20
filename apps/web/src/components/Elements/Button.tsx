import React from "react";

const Button = ({
  onClick,
  value,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  value: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondary p-3 rounded-md text-[#fff] font-bold"
    >
      {value}
    </button>
  );
};

export default Button;
