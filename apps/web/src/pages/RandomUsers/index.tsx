import { useEffect, useState } from "react";
import RandomUsersTable from "../../components/RandomUsersTable";
import { IUser } from "../../interfaces/IUser";
import { RandomUsersService } from "../../utils/services/RandomUsersService";

const RandomUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (users.length == 0) {
      RandomUsersService.getUsers(1, 5).then((usersList) =>
        setUsers(usersList)
      );
    }
  }, [users]);

  return (
    <div>
      <h1>Random Users</h1>
      <RandomUsersTable users={users} />
    </div>
  );
};

export default RandomUsers;
