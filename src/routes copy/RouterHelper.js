import { useNavigate, useLocation, useParams, Outlet, Link, NavLink, useSearchParams } from "react-router-dom";
const useNavigatorHook = (params) => {
  /* need to added all types of params and possible option */
  /* for go forward */
  /* for go back */
  /* for replace to avoid back */
  /* state data */
  const navigate = useNavigate();
  return navigate;
};
const useLocationHook = () => {
  return useLocation();
};
const useParamsHook = () => {
  return useParams();
};
const useOutletHook = () => {
  return Outlet();
};
const useLinkHook = () => {
  return Link();
};
const useNavLinkHook = () => {
  return NavLink();
};
const useSearchParamsHook = () => {
  return useSearchParams();
};
export {
  useNavigatorHook,
  useLocationHook,
  useParamsHook,
  useOutletHook,
  useLinkHook,
  useNavLinkHook,
  useSearchParamsHook,
};
/* 
https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
*/

/* all route hook and usages will be here */
