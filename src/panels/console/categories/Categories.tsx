import { RenderOutLet } from "third-party-package-handler/RouterHelper";
import CategoryList from "./CategoryList";

const Categories = () => {
  return (
    <div>
      <RenderOutLet />
      <div>
        <CategoryList />
      </div>
    </div>
  );
};
export default Categories;
