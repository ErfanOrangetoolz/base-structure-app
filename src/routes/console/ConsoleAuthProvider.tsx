import { ReactNode, createContext, useContext, useState } from "react";
import { useLocationHook, useNavigatorHook } from "third-party-package-handler/RouterHelper";

interface authInfoData {
  consoleId: string;
  userName: string;
  password: string;
}
interface ProviderStates {
  isCreatingEnvironment: boolean;
  token: string | null;
  authInfo: authInfoData | null;
}
interface setAuthParams {
  needToRedirect: boolean;
}
type Context = {
  auth: ProviderStates;
  saveAuth: (payload: ProviderStates, params: setAuthParams | null) => void;
  resetAuth: () => void;
};
type Props = {
  children: ReactNode;
};

const ConsoleAuthContext = createContext<Context | null>(null);

export const ConsoleAuthProvider = ({ children }: Props) => {
  const localtion = useLocationHook();
  const navigate = useNavigatorHook();
  const [auth, setAuth] = useState<ProviderStates>({
    isCreatingEnvironment: true,
    token: null,
    authInfo: null
  });
  const saveAuth = (payload: Partial<ProviderStates>, params: Partial<setAuthParams> | null) => {
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
    navigate("/console/login", { replace: true });
  };
  return (
    <ConsoleAuthContext.Provider value={{ auth, saveAuth, resetAuth }}>
      {children}
    </ConsoleAuthContext.Provider>
  );
};
export default ConsoleAuthProvider;
export const useConsoleAuth = () => {
  return useContext(ConsoleAuthContext);
};
