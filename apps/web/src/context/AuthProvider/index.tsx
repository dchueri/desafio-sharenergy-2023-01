import { createContext, useEffect, useState } from "react";
import { IAuthProvider } from "../../interfaces/IAuthProvider";
import { IContext } from "../../interfaces/IContext";
import { IUserAuth } from "../../interfaces/IUserAuth";
import { AuthService } from "../../utils/services/AuthService";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUserAuth | null>();

  useEffect(() => {
    if (!user) {
      const loggedUser = AuthService.getUserLocalStorage();
      if (loggedUser) {
        setUser(loggedUser);
      }
    }
  }, [user]);

  const authenticate = async (
    username: string,
    password: string,
    remember: boolean
  ) => {
    const response = await AuthService.loginRequest(username, password);
    const payload = { token: response.access_token, username };
    setUser(payload);

    AuthService.setUserLocalStorage(payload);
  };

  const logout = () => {
    setUser(null);
    AuthService.setUserLocalStorage(null);
  };

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
