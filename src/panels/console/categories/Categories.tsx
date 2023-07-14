import { RenderOutLet } from "third-party-package-handler/RouterHelper";
import CategoryHeader from "./CategoryHeader";
import CategoryList from "./CategoryList";

const Categories = () => {
  return (
    <div>
      <RenderOutLet />
      <div>
        <CategoryHeader />

        <CategoryList />
      </div>
    </div>
  );
};
export default Categories;
