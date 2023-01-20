import { Dispatch } from "react";

const Input = ({
  value,
  setValue,
  placeholder,
  type,
}: {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: React.HTMLInputTypeAttribute | null;
}) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className="input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
