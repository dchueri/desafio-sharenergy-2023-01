import { IUserAuth } from "./IUserAuth";

export interface IContext extends IUserAuth {
  authenticate: (
    username: string,
    password: string,
    remember: boolean
  ) => Promise<void>;
  logout: () => void;
}
