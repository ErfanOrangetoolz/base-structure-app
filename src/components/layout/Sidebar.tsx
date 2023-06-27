import styled from "@emotion/styled";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "assets/icons/AddIcon";
import HomeIcon from "assets/icons/HomeIcon";
import * as React from "react";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(open);
  React.useEffect(() => {
    console.log(open);
  }, []);

  const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    color: "rgb(75, 85, 99)",
    gap: "12px",

    svg: {
      fill: "rgb(156, 163, 175)"
    },

    "&.Mui-selected": {
      // color: theme.palette.primary.main,
      color: "#4897E9",
      backgroundColor: "rgb(238, 242, 255) !important",
      borderRadius: 4
      //   borderLeft: `4px solid ${theme.palette.primary.main}`
    },
    "&.Mui-selected::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: "4px",
      borderRadius: 8,
      backgroundColor: "#4897E9" /* Set your desired border color here */
    },

    "&.Mui-selected svg ": {
      fill: "#4897E9"
    },

    "&.Mui-focusVisible": {
      backgroundColor: "rgb(238, 242, 255) !important"
    },
    "&:hover": {
      backgroundColor: "rgb(238, 242, 255) !important"
    }
  }));

  const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    minWidth: "auto"
  }));

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 288,
        bgcolor: "background.paper"
        // px: "20px"
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <StyledListItemButton selected={true}>
        <StyledListItemIcon>
          <HomeIcon />
        </StyledListItemIcon>
        <ListItemText primary="Dashboard" />
      </StyledListItemButton>

      <StyledListItemButton>
        <StyledListItemIcon>
          <AddIcon />
        </StyledListItemIcon>
        <ListItemText primary="Add Product" />
      </StyledListItemButton>

      {/* <StyledListItemButton onClick={handleClick}>
        <StyledListItemIcon>
          <InboxIcon />
        </StyledListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </StyledListItemButton> */}

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <StyledListItemButton sx={{ pl: 4 }}>
            <StyledListItemIcon>{/* <StarBorder /> */}</StyledListItemIcon>
            <ListItemText primary="Starred" />
          </StyledListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default Sidebar;
