import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataService } from "../services/data.service";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const queryClient = useQueryClient();
  const { data } = useQuery(
    [`user`],
    () =>
      DataService.getData(
        `users/${JSON.parse(window.localStorage.getItem(`user`)).id}`
      ),
    {
      retry: 1,
      onError: () => setUser({}),
      onSuccess: () => {
        data ? setUser(data) : queryClient.invalidateQueries(`user`);
      },
    }
  );
  useEffect(() => {
    if (!user) return;
    DataService.setUser(user);
    window.localStorage.setItem(`user`, JSON.stringify(user));
  }, [user]);
  if (user)
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  else return;
};
export default AuthProvider;
