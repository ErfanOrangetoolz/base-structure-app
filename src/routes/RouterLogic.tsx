import { useEffect, useState } from "react";
import RouterHelper from "../third-party-package-handler/RouterHelper";
import EmployeeRoutes from "./employee/EmployeeRoutes";
import ConsoleRoutes from "./console/ConsoleRoutes";

const routePrefix = {
  baseUrl: "http://localhost:7011/",
  console: "/console",
  employee: "/",
};

const RouterLogic = () => {
  const locationHook = RouterHelper.useLocationHook();
  const [access, setAccess] = useState("employee");
  useEffect(() => {
    const localtion = locationHook.pathname;
    if (localtion.includes(routePrefix.console)) {
      setAccess("console");
    }
  }, []);
  return access === "employee" ? <EmployeeRoutes /> : <ConsoleRoutes />;
};
export default RouterLogic;

// type CheckRoute = (text: string) => string;

// const checkRoute: CheckRoute = (localtion) => {
//   if (localtion.includes(routePrefix.console)) {
//     return "console";
//   } else {
//     return "employee";
//   }
// };
