import { ReactNode, createContext, useContext, useState } from "react";
import { useLocationHook, useNavigatorHook } from "third-party-package-handler/RouterHelper";

interface AuthInfo {
  userName: string;
  password: string;
}
interface ProviderStates {
  isCreatingEnvironment: boolean;
  token: string | null;
  authInfo: AuthInfo | null;
}
interface AuthParams {
  needToRedirect: boolean;
}
type Context = {
  auth: ProviderStates;
  saveAuth: (payload: ProviderStates, params: AuthParams | null) => void;
  resetAuth: () => void;
};
type Props = {
  children: ReactNode;
};

const UserAuthContext = createContext<Context | null>(null);

// const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
export const UserAuthProvider = ({ children }: Props) => {
  const localtion = useLocationHook();
  const navigate = useNavigatorHook();
  const [auth, setAuth] = useState<ProviderStates>({
    isCreatingEnvironment: true,
    token: null,
    authInfo: null
  });
  const saveAuth = (payload: Partial<ProviderStates>, params: Partial<AuthParams> | null) => {
    setAuth({ ...auth, ...payload });
    if (params && params.needToRedirect) {
      const path = localtion.state?.path || "/";
      navigate(path, { replace: true });
    }
  };
  const resetAuth = () => {
    setAuth({
      ...auth,
      isCreatingEnvironment: false,
      token: null,
      authInfo: null
    });
    navigate("/login", { replace: true });
  };
  return (
    <UserAuthContext.Provider value={{ auth, saveAuth, resetAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};
export default UserAuthProvider;
export const useUserAuth = () => {
  const { auth, saveAuth, resetAuth } = useContext(UserAuthContext) as Context;
  const { authInfo, token, isCreatingEnvironment } = auth;
  return { authInfo, token, isCreatingEnvironment, saveAuth, resetAuth };
};
