import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "./AuthProvider";
import Structure from "../structure/Structure";
import Chat from "../Chat";
import { useRef } from "react";
import PublicRoute from "./PublicRoute";

const RouteApp = () => {
  const structureRef = useRef(null);
  const structureHandler = (flag = true) => {
    if (structureRef.current !== undefined && structureRef.current != null) {
      structureRef.current.hanldeShowNavigation(flag);
    }
  };
  return (
    <Router>
      <AuthProvider>
        {/* check auth and show/hide navigation bar */}
        <Structure ref={structureRef}>
          <Routes errorElement>
            {/* need to add two compoent for protectedRoute and publicRoute */}
            <Route
              path='/'
              element={
                <ProtectedRoute structureHandler={structureHandler}>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              {/* need to modify ProtectedRoute component */}
              {/* all auth route will be here */}
            </Route>
            {/* public routes */}
            <Route
              path='/chat'
              element={
                <PublicRoute structureHandler={structureHandler}>
                  <Chat />
                </PublicRoute>
              }
            />
            <Route
              path='/login'
              element={<Chat structureHandler={structureHandler} />}
            />
            <Route path='*' element={<div>no match route</div>} />
          </Routes>
        </Structure>
      </AuthProvider>
    </Router>
  );
};
export default RouteApp;
