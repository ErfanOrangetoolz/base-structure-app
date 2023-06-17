import { ComponentProps } from "react";

type DivProps = ComponentProps<"div">;

const Div = ({ children, ...rest }: DivProps) => {
  return <div {...rest}>{children}</div>;
};
export default Div;
