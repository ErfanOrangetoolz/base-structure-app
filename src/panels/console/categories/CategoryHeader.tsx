import { Button, Stack, Typography } from "@mui/material";

const CategoryHeader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={3}
      // sx={{borderBottom: `${border ? '1px solid' : ''}`}}
      borderBottom={"1px solid"}
      borderColor={"other.divider"}
      flexWrap={"wrap"}
      mb={5}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2.2}>
        <Typography variant="h5">Category List</Typography>
      </Stack>

      <Button variant="contained" startIcon={"+"}>
        Add Category
      </Button>
    </Stack>
  );
};

export default CategoryHeader;
