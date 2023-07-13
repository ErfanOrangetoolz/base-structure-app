import { Grid } from "@mui/material";
import LoginLeftSide from "./LoginLeftSide";
import LoginRightSide from "./LoginRightSide";

const Login = () => {
  return (
    <Grid container sx={{ minHeight: "100vh", bgcolor: "other.bgPaperElevation" }}>
      <LoginLeftSide />
      <LoginRightSide />
    </Grid>
  );
};

export default Login;
