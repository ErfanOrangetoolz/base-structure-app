import { useEffect } from "react";
const PublicRoute = ({ children, structureHandler }) => {
  useEffect(() => {
    structureHandler(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    /* user loader so that hide menu option before showing main content */
    <div>{children}</div>
  );
};
export default PublicRoute;
