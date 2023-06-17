import {
  Outlet as RenderOutLet,
  Route as RenderRoute,
  BrowserRouter as RenderRouter,
  Routes as RenderRoutes,
  useLocation as useLocationHook,
  useNavigate as useNavigatorHook,
  useOutlet as useOutletHook,
  useParams as useParamsHook,
  useSearchParams as useSearchParamsHook
} from "react-router-dom";

export { useLocationHook, useNavigatorHook, useOutletHook, useParamsHook, useSearchParamsHook };

/* render hook */
export { RenderOutLet, RenderRoute, RenderRouter, RenderRoutes };
