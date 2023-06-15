import { useEffect } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import PageReadyState from "../components/viewComponent/PageReadyState";
import UnauthorizedAccess from "../components/viewComponent/UnauthorizedAccess";
import { getCookie } from "../handlers/cookie/CookieHandler";
import { CookieVariables } from "../handlers/cookie/Variables";
import DashboardModule from "../modules/dashboard";
import { useAuth } from "./AuthProvider";
import { useLocationHook, useNavigatorHook } from "./RouterHelper";
const ProtectedRoute = ({ children, showNav = true, structureHandler }) => {
  const auth = useAuth();
  const localtion = useLocationHook();
  const navigate = useNavigatorHook();
  useEffect(() => {
    structureHandler(true);
    if (auth.authInfo.token == null) {
      let token_data = getCookie({ name: CookieVariables.meis_token });
      let test = true;
      if (test) {
        auth.setAuth({ token: "token", loadingData: false });
        return;
      }
      if (token_data) {
        auth.setAuth({ token: token_data, loadingData: false });
        fetchGlobalData();
      } else {
        navigate("/login", { replace: true, state: localtion.pathname });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchGlobalData = () => {
    /* 
            call api to get some data
        */
  };

  if (auth.authInfo.loadingData) {
    return <PageReadyState />;
  }
  if (!auth.authInfo.loadingData && auth.authInfo.token == null) {
    return <UnauthorizedAccess />;
  }
  return (
    <AuthLayout {...auth}>
      {(localtion.pathname === "/" || localtion.pathname === "") && <DashboardModule />}
      {children}
    </AuthLayout>
  );
};
export default ProtectedRoute;
