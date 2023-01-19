import axios from "axios";
import { ApiConnection } from "../ApiConnection";

export class RandomCatsService extends ApiConnection {
  public static async getCatImage(statusCode: number): Promise<string> {
    const response = await axios.get(
      this.apiUrl + `externals/cat/${statusCode}`
    );
    return `data:${response.data.contentType};base64,${response.data.data}`;
  }
}
