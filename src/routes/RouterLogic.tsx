import { useEffect, useState } from "react";
import RouterHelper from "../third-party-package-handler/RouterHelper";
import ConsoleRoutes from "./console/ConsoleRoutes";
import UserRoutes from "./user/UserRoutes";

const routePrefix = {
  baseUrl: "http://localhost:7011/",
  console: "/console",
  employee: "/"
};

const RouterLogic = () => {
  const locationHook = RouterHelper.useLocationHook();
  const [access, setAccess] = useState("user");
  useEffect(() => {
    const localtion = locationHook.pathname;
    if (localtion.includes(routePrefix.console)) {
      setAccess("console");
    }
  }, [locationHook.pathname]);
  return access === "user" ? <UserRoutes /> : <ConsoleRoutes />;
};
export default RouterLogic;
