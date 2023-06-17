import Dashboard from "panels/user/dashboard/Dashboard";
import { RenderOutLet, RenderRoute, RenderRoutes } from "third-party-package-handler/RouterHelper";
import PrivateRoute from "./PrivateRoute";
import { UserAuthProvider } from "./UserAuthProvider";

const UserRoutes = () => {
  return (
    <UserAuthProvider>
      <RenderRoutes>
        <RenderRoute
          // loader
          // errorElement
          path="/"
          element={
            <PrivateRoute>
              <RenderOutLet />
            </PrivateRoute>
          }
        >
          <RenderRoute path="dashboard" element={<Dashboard />} />
        </RenderRoute>
        <RenderRoute
          path="/categories"
          element={
            <PrivateRoute>
              <RenderOutLet />
            </PrivateRoute>
          }
        >
          <RenderRoute path=":id" element={<Dashboard />} />
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
        <RenderRoute path="*" element={<div>no match route</div>} />
      </RenderRoutes>
    </UserAuthProvider>
  );
};
export default UserRoutes;
