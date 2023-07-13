import { Grid } from "@mui/material";
import { logo } from "assets/images/ImageLink";

const LoginLeftSide = () => {
  return (
    <Grid
      item
      md={6}
      sm={12}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#2097C1"
      }}
    >
      <img src={logo} width={"100%"} alt="Brand Logo" />
    </Grid>
  );
};
export default LoginLeftSide;
