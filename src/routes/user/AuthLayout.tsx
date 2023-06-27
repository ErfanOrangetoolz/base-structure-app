import { ReactNode } from "react";

import { Box, Stack } from "@mui/material";
import FabWithPopper from "components/layout/FabWithPopper";
import Logo from "components/layout/Logo";
import Navbar from "components/layout/Navbar";
import Sidebar from "components/layout/Sidebar";

type Props = {
  children: ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  return (
    <div className="main_auth_layout">
      <Stack direction={"row"}>
        <Box sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)", height: "100vh" }}>
          <Logo />
          <Sidebar />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Navbar />
          <Box sx={{ bgcolor: "#F2F3F3", height: "93.5%", position: "relative" }} p={3}>
            {children}
            <FabWithPopper />
          </Box>
        </Box>
      </Stack>
    </div>
  );
};
export default AuthLayout;

/* main layout design will be here */
