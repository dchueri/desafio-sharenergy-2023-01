import axios from "axios";
import { IUser } from "../../interfaces/IUser";
import { ApiConnection } from "../ApiConnection";

export class RandomUsersService extends ApiConnection {
  public static async getUsers(
    pageNumber: number,
    resultsNumberPerPage: number
  ): Promise<IUser[]> {
    const { data } = await axios.get(this.apiUrl + "externals/random-users", {
      params: {
        pageNumber: pageNumber,
        numberOfResultsPerPage: resultsNumberPerPage,
      },
    });

    return data;
  }
}
