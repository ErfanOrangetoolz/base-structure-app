import { Box } from "@mui/material";
import CategoryHeader from "./CategoryHeader";
import CategoryList from "./CategoryList";

const Categories = () => {
  return (
    <Box borderRadius={1} bgcolor={"common.white"}>
      <CategoryHeader />
      <CategoryList />
    </Box>
  );
};
export default Categories;
