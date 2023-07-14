/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack } from "@mui/material";
import FabWithPopper from "components/layout/FabWithPopper";
import Logo from "components/layout/Logo";
import Navbar from "components/layout/Navbar";
import Sidebar from "components/layout/Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
  return (
    <div>
      <Stack direction={"row"}>
        <Box sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)", height: "100vh", maxWidth: 288 }}>
          <Logo />
          <Sidebar />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Navbar />
          <Box sx={{ bgcolor: "#F2F3F3", height: "93.5%", position: "relative" }} p={3}>
            {children}
            <FabWithPopper />
            {/* <h2>a left side menu panel</h2>
            <h2>a body container</h2> */}

            {/* keep this editor code */}
            {/* <Editor
              apiKey="ptgxtryj2toyk5csxrpybtvg42i6c5gzpwiw1xlc61dqsjbn"
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                // skin: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                branding: false,
                placeholder: "Enter your text",
                resize: false,
                statusbar: false
              }}
            /> */}
          </Box>
        </Box>
      </Stack>
    </div>
  );
};
export default PrivateRoute;
