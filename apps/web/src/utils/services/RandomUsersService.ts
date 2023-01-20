import { IUser } from "../../interfaces/IUser";
import { api } from "../api";

export class RandomUsersService {
  public static async getUsers(
    pageNumber: number,
    resultsNumberPerPage: number
  ): Promise<IUser[]> {
    const { data } = await api.get("externals/random-users", {
      params: {
        pageNumber: pageNumber,
        numberOfResultsPerPage: resultsNumberPerPage,
      },
    });

    return data;
  }

  public static async getUsersList(): Promise<IUser[]> {
    const { data } = await api.get("externals/random-users");

    return data;
  }

  public static filterUsers(usersList: IUser[], search: string) {
    const filteredUsers = usersList.filter((user: IUser) => {
      if (
        user.email.includes(search) ||
        user.fullName.includes(search) ||
        user.username.includes(search)
      ) {
        return user;
      }
    });
    const response = [];
    for (let i = 0; i < 5; i++) {
      if (!filteredUsers[i]) {
        break;
      }
      response.push(filteredUsers[i]);
    }
    return response;
  }
}
