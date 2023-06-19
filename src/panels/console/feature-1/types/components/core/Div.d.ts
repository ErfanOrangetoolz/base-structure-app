import React, { ReactElement } from "react";
interface divInterface {
  children: ReactElement | null;
  className: string;
  style: object;
  onClick: Function;
  onscroll: Function;
  divRef: any;
  rest: object;
}
declare const Div: (props: divInterface) => React.JSX.Element;
export default Div;
