import { api } from "../api";

export class RandomCatsService {
  public static async getCatImage(statusCode: number): Promise<string> {
    const response = await api.get(`externals/cat/${statusCode}`);
    return `data:${response.data.contentType};base64,${response.data.data}`;
  }
}
