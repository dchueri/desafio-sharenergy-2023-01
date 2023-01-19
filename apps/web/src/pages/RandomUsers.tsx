import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import RandomUsersTable from "../components/RandomUsers/RandomUsersTable";
import { SearchBar } from "../components/RandomUsers/SearchBar";
import { IUser } from "../interfaces/IUser";
import { RandomUsersService } from "../utils/services/RandomUsersService";

const RandomUsers = () => {
  const usersPerPage = 5;
  const [completeUsersList, setCompleteUsersList] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentUsersList, setCurrentUsersList] = useState<IUser[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  let usersToShow: Array<IUser> = [];

  useEffect(() => {
    if (completeUsersList.length == 0) {
      RandomUsersService.getUsersList().then((usersList) => {
        setCompleteUsersList(usersList);
        setCurrentUsersList(completeUsersList.slice(0, 5));
      });
    }

    if (searchValue) {
      usersToShow = RandomUsersService.filterUsers(
        completeUsersList,
        searchValue
      );
      setCurrentUsersList(usersToShow);
    }
  }, [searchValue]);

  useEffect(() => {
    const endOffset = itemOffset + usersPerPage;
    setCurrentUsersList(completeUsersList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(completeUsersList.length / usersPerPage));
  }, [itemOffset, completeUsersList]);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * usersPerPage) % completeUsersList.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="title">Random Users</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <RandomUsersTable users={currentUsersList} />
      <ReactPaginate
        nextLabel=">"
        className="flex"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="flex flex-row w-[50%]"
        pageLinkClassName="px-2 py-1 justify-center min-w-[2em] text-sm mx-1 font-medium bg-[#00A2A2] text-center text-white rounded-lg hover:bg-[#fff] hover:text-[#00A2A2] hover:ring-2 focus:ring-2"
        previousLinkClassName="px-1 justify-center py-1 min-w-[2em] flex text-sm mx-1 font-medium bg-[#00A2A2] text-center text-white rounded-lg hover:bg-[#fff] hover:text-[#00A2A2] hover:ring-2"
        nextLinkClassName="px-2 py-1 justify-center min-w-[2em] flex text-sm mx-1 font-medium bg-[#00A2A2] text-center text-white rounded-lg hover:bg-[#fff] hover:text-[#00A2A2] hover:ring-2"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeLinkClassName="px-2 py-1 justify-center min-w-[2em] flex text-sm mx-1 font-medium bg-[#fff] text-center rounded-lg text-[#00A2A2] outline-none ring-2 ring-[#00A2A2]"
      />
    </div>
  );
};

export default RandomUsers;
