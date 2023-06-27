// import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Fade, Popper, Stack, Typography, styled } from "@mui/material";
import AddIcon from "assets/icons/AddIcon";
import React, { useRef, useState } from "react";

const StyledArrow = styled("span")({
  position: "absolute",
  fontSize: 6,
  width: "3em",
  height: "3em",
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderColor: "transparent"
  },
  '&[data-popper-placement*="bottom"]::before': {
    borderWidth: "0 1.5em 1.5em 1.5em",
    borderTopColor: "#fff"
  }
});

const FabWithPopper = () => {
  const arrowRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "fixed",
        bottom: 50,
        right: 50
      }}
    >
      <Fab color="primary" aria-label="add" ref={arrowRef} onClick={handleClick}>
        <AddIcon fill="white" />
      </Fab>

      <Popper
        open={open}
        anchorEl={arrowRef.current}
        disablePortal={true}
        placement="top"
        transition
        modifiers={[
          {
            name: "flip",
            enabled: true,
            options: {
              altBoundary: true,
              rootBoundary: "document",
              padding: 8
            }
          },
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: "document",
              padding: 8
            }
          },
          {
            name: "arrow",
            enabled: true,
            options: {
              element: arrowRef.current
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                // border: 1,
                p: 2,
                bgcolor: "background.paper",
                boxShadow: 3,
                borderRadius: 1
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <Stack spacing={1} alignItems={"center"} border={1} p={2} borderColor={"lightGray"}>
                  <AddIcon />
                  <Typography variant="body1">Lorem, ipsum dolor</Typography>
                </Stack>

                <Stack spacing={1} alignItems={"center"} border={1} p={2} borderColor={"lightGray"}>
                  <AddIcon />
                  <Typography variant="body1">Lorem, ipsum dolor</Typography>
                </Stack>
              </Stack>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default FabWithPopper;
