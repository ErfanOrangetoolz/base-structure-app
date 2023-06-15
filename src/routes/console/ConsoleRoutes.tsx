import { Routes, Route, Outlet } from "react-router-dom";
const ConsoleRoutes = () => {
  return (
    // auth provider will be here if needed or can be added into router logic file
    <Routes>
      <Route
        path='/console'
        element={
          <div>
            admin layout <Outlet />
          </div>
        }
      >
        <Route path='dashboard' element={<div> admin dashboard</div>} />
        <Route path='category' element={<div> admin category</div>} />
      </Route>
      <Route path='/console/login' element={<div>login</div>} />
      <Route path='*' element={<div>no match route</div>} />
    </Routes>
  );
};
export default ConsoleRoutes;
