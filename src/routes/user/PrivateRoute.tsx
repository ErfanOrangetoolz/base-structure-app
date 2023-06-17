/* eslint-disable react-hooks/exhaustive-deps */
import Dashboard from "panels/user/dashboard/Dashboard";
import { ReactNode, useEffect } from "react";
import { useLocationHook, useNavigatorHook } from "third-party-package-handler/RouterHelper";
import AuthLayout from "./AuthLayout";
import { useUserAuth } from "./UserAuthProvider";

type Props = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
  const localtion = useLocationHook();
  const navigate = useNavigatorHook();
  const { token } = useUserAuth();
  useEffect(() => {
    /* check data from cookie and set to auth state and change loader flag false */
    /* if did not find then navigate to login */
    if (token == null || token === "") {
      console.log(navigate);
      // navigate("/login", { replace: true, state: localtion.pathname });
    }
  }, []);
  return (
    <AuthLayout>
      {(localtion.pathname === "/" || localtion.pathname === "") && <Dashboard />}
      {children}
    </AuthLayout>
  );
};
export default PrivateRoute;
