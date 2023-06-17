import Dashboard from "panels/user/dashboard/Dashboard";
import { ReactNode } from "react";
import RouterHelper from "third-party-package-handler/RouterHelper";
import AuthLayout from "./AuthLayout";

type Props = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
  const localtion = RouterHelper.useLocationHook();
  return (
    <AuthLayout>
      {(localtion.pathname === "/" || localtion.pathname === "") && <Dashboard />}
      {children}
    </AuthLayout>
  );
};
export default PrivateRoute;
