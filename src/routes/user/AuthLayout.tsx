import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  return <div className="main_auth_layout">{children}</div>;
};
export default AuthLayout;

/* main layout design will be here */
