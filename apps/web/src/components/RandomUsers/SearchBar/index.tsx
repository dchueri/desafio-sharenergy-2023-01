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
      placeholder="Buscar um usuário"
      className="outline-none mx-auto border-solid border-[1px] rounded-[10px] px-3 py-2 w-[60%] text-black"
      id="search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
