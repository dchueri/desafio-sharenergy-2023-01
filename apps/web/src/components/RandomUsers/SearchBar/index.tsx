import { Dispatch } from "react";

export const SearchBar = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      type="text"
      placeholder="Busque um usuário..."
      className="input"
      id="search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
