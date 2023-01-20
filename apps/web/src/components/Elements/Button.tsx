import React from "react";

const Button = ({
  onClick,
  children,
  color: variant,
  disabled = false,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: any;
  color: string;
  disabled: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        disabled
          ? "bg-[#c7c7c7] p-3 rounded-md text-[#fff] font-bold duration-300"
          : `${
              variant == "error"
                ? `bg-error hover:text-error hover:ring-error`
                : "bg-secondary hover:text-secondary"
            } p-3 rounded-md text-[#fff] font-bold hover:bg-[#fff] hover:ring-1 duration-300`
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
