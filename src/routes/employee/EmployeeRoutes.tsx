import { Routes, Route, Outlet } from "react-router-dom";

const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            admin layout header footer <Outlet />
          </div>
        }
      >
        <Route
          path='dashboard'
          element={
            <div>
              admin dashboard <Outlet />
            </div>
          }
        >
          <Route path=':id' element={<div> admin category id</div>} />
        </Route>
        <Route path='category' element={<div> admin category</div>} />
      </Route>
      <Route path='/login' element={<div>login</div>} />
      <Route path='console/*' element={<div>no match route</div>} />
    </Routes>
  );
};
export default EmployeeRoutes;
