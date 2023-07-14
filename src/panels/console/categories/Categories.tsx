import { Box } from "@mui/material";
import { RenderOutLet } from "third-party-package-handler/RouterHelper";
import CategoryHeader from "./CategoryHeader";
import CategoryList from "./CategoryList";

const Categories = () => {
  return (
    <Box borderRadius={1} bgcolor={"common.white"}>
      <RenderOutLet />
      <div>
        <CategoryHeader />
        <CategoryList />
      </div>
    </Box>
  );
};
export default Categories;
