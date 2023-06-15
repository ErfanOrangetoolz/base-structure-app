import React, { ComponentProps } from "react";

interface DivProps extends ComponentProps<"div"> {}

const Div = ({ children, ...rest }: DivProps) => {
  return <div {...rest}>{children}</div>;
};
export default Div;
