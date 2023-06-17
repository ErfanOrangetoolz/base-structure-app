import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { UserAuthProvider } from "./UserAuthProvider";

const UserRoutes = () => {
  return (
    <UserAuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          }
        >
          <Route
            path="dashboard"
            element={
              <div>
                admin dashboard <Outlet />
              </div>
            }
          >
            <Route path=":id" element={<div> admin category id</div>} />
          </Route>
          <Route path="category" element={<div> admin category</div>} />
        </Route>
        <Route path="/login" element={<div>login</div>} />
        <Route path="console/*" element={<div>no match route</div>} />
      </Routes>
    </UserAuthProvider>
  );
};
export default UserRoutes;
