import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataService } from "../services/data.service";
import { useQuery } from "react-query";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem(`user`))
  );
  const { data } = useQuery(
    [`user`],
    () => DataService.getData(`/users/${user._id}`),
    {
      retry: 1,
      enabled: JSON.stringify(user) != "{}",
    }
  );
  useEffect(() => {
    if (!user) return;
    window.localStorage.setItem(`user`, JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    if (!data) return;
    setUser(data);
  }, [data]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
