import { Box } from "@mui/material";
import { logo } from "assets/images/ImageLink";
const Logo = () => {
  return (
    <Box textAlign={"center"}>
      <img src={logo} alt="logo" height={100} width={150} />
    </Box>
  );
};

export default Logo;
