import { createContext, useContext, useState } from "react";
import { useLocationHook, useNavigatorHook } from "./RouterHelper";

const default_data = {
  token: null,
  loadingData: true,
  authInfo: null,
};
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const localtion = useLocationHook();
  const navigate = useNavigatorHook();
  const [authInfo, setAuthInfo] = useState(default_data);

  const setAuth = (
    response,
    data = { role: "user", need_to_redirect: false }
  ) => {
    setAuthInfo({
      ...authInfo,
      ...response,
    });
    if (data.role === "user") {
      if (data.need_to_redirect) {
        let path = localtion.state?.path || "/";
        navigate(path, { replace: true });
      }
    }
  };
  const resetAuth = (role = "user") => {
    if (role === "user") {
      setAuthInfo(default_data);
      navigate("/login", { replace: true });
    }
  };
  return (
    <AuthContext.Provider value={{ authInfo, setAuth, resetAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
