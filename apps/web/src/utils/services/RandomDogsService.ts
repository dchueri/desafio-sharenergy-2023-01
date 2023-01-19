import axios from "axios";
import { ApiConnection } from "../ApiConnection";

export class RandomDogsService extends ApiConnection {
  public static async getDog(): Promise<{ data: string }> {
    const { data } = await axios.get(this.apiUrl + "externals/dog");

    return data;
  }
}
