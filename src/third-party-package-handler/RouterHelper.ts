import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useOutlet,
  useParams,
  useSearchParams,
} from "react-router-dom";

/* must be implement all possible option */
class RouterHelper {
  useNavigatorHook() {
    const navigate = useNavigate();
    return navigate;
  }
  useLocationHook() {
    return useLocation();
  }
  useParamsHook() {
    return useParams();
  }
  useOutletHook() {
    return useOutlet();
  }
  useOutletRenderHook() {
    return Outlet;
  }
  useLinkHook() {
    return Link;
  }
  useNavLinkHook() {
    return NavLink;
  }
  useSearchParamsHook() {
    return useSearchParams();
  }
}
export default new RouterHelper();
