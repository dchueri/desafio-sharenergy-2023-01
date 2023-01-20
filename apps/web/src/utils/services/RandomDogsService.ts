import { api } from "../api";

export class RandomDogsService {
  public static async getDog(): Promise<{ data: string }> {
    const { data } = await api.get("externals/dog");

    return data;
  }
}
