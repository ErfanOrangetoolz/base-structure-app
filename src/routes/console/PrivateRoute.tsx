/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
  return (
    <div>
      <h2>a left side menu panel</h2>
      <h2>a body container</h2>
      {children}
    </div>
  );
};
export default PrivateRoute;
