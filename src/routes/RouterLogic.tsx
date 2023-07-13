import { Grid } from "@mui/material";
import CustomCircleLoader from "components/loaders/CustomCircleLoader";
import { useEffect, useState } from "react";
import { useLocationHook } from "third-party-package-handler/RouterHelper";
import ConsoleRoutes from "./console/ConsoleRoutes";
import UserRoutes from "./user/UserRoutes";

const routePrefix = {
  baseUrl: "http://localhost:7011/",
  console: "/console",
  employee: "/"
};

const RouterLogic = () => {
  const locationHook = useLocationHook();
  const [access, setAccess] = useState("user");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localtion = locationHook.pathname;
    if (localtion.includes(routePrefix.console)) {
      setAccess("console");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [locationHook.pathname]);

  if (isLoading) {
    return (
      <Grid
        container
        sx={{ minHeight: "100vh", bgcolor: "other.bgPaperElevation" }}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <CustomCircleLoader />
      </Grid>
    );
  }

  return access === "user" ? <UserRoutes /> : <ConsoleRoutes />;
};
export default RouterLogic;
