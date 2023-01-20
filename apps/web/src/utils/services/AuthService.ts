import { IUserAuth } from "../../interfaces/IUserAuth";
import { api } from "../api";

export class AuthService {
  public static async loginRequest(username: string, password: string) {
    try {
      const request = await api.post("auth/login", { username, password });
      return request.data;
    } catch (e) {
      return null;
    }
  }

  public static setUserLocalStorage(user: IUserAuth | null) {
    localStorage.setItem("u", JSON.stringify(user));
  }

  public static getUserLocalStorage() {
    const json = localStorage.getItem("u");
    if (!json) {
      return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
  }
}
