import AddCategory from "panels/console/categories/AddCategory";
import Categories from "panels/console/categories/Categories";
import { Outlet, Route, Routes } from "react-router-dom";
import { RenderOutLet } from "third-party-package-handler/RouterHelper";
import PrivateRoute from "./PrivateRoute";
const ConsoleRoutes = () => {
  return (
    // auth provider will be here if needed or can be added into router logic file
    <Routes>
      <Route
        path="/console"
        element={
          <PrivateRoute>
            <RenderOutLet />
          </PrivateRoute>
        }
      >
        <Route path="category" element={<Categories />}>
          <Route path="add" element={<AddCategory />} />
        </Route>
        <Route
          path="products"
          element={
            <div>
              admin products list as table <Outlet />
            </div>
          }
        >
          <Route path="add" element={<div> admin products add component</div>} />
        </Route>
      </Route>
      <Route path="/console/login" element={<div>login</div>} />
      <Route path="*" element={<div>no match route</div>} />
    </Routes>
  );
};
export default ConsoleRoutes;
