import Categories from "panels/user/categories/Categories";
import CategoryDetails from "panels/user/categories/CategoryDetails";
import Dashboard from "panels/user/dashboard/Dashboard";
import { RenderOutLet, RenderRoute, RenderRoutes } from "third-party-package-handler/RouterHelper";
import PrivateRoute from "./PrivateRoute";
import { UserAuthProvider } from "./UserAuthProvider";

const UserRoutes = () => {
  return (
    <UserAuthProvider>
      <RenderRoutes>
        <RenderRoute
          path="/"
          element={
            <PrivateRoute>
              <RenderOutLet />
            </PrivateRoute>
          }
        >
          <RenderRoute index={true} path="" element={<Dashboard />} />
          <RenderRoute path="base-structure-app" element={<Dashboard />} />
          <RenderRoute path="base-structure-app/" element={<Dashboard />} />
        </RenderRoute>
        <RenderRoute
          path="/categories"
          element={
            <PrivateRoute>
              <RenderOutLet />
            </PrivateRoute>
          }
        >
          <RenderRoute index={true} path="" element={<Categories />} />
          <RenderRoute path=":name" element={<CategoryDetails />} />
          <RenderRoute path="add" element={<Dashboard />} />
          <RenderRoute path="edit/:id" element={<Dashboard />} />
          <RenderRoute path="add-products-to-category/:id" element={<Dashboard />} />
        </RenderRoute>
        <RenderRoute
          path="/products"
          element={
            <PrivateRoute>
              <RenderOutLet />
            </PrivateRoute>
          }
        >
          <RenderRoute path=":id" element={<Dashboard />} />
          <RenderRoute path="add" element={<Dashboard />} />
          <RenderRoute path="edit/:id" element={<Dashboard />} />
          <RenderRoute path="add-into-category" element={<Dashboard />} />
        </RenderRoute>
        <RenderRoute path="/login" element={<div>login</div>} />
        <RenderRoute path="*" element={<Dashboard />} />
        {/* <RenderRoute path="*" element={<div>no match found</div>} /> */}
      </RenderRoutes>
    </UserAuthProvider>
  );
};
export default UserRoutes;
