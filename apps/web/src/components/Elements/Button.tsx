import React from "react";

const Button = ({
  onClick,
  children,
  variant: variant,
  disabled = false,
  className,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: any;
  variant: string;
  disabled: boolean;
  className: string;
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
            } p-3 rounded-md text-[#fff] font-bold hover:bg-[#fff] hover:ring-1 duration-300 ${className}`
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
