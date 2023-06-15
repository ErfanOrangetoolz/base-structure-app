import { ReactElement } from "react";

export interface commonProps {
  className?: string;
  style?: object;
  onClick?: Function;
  onScroll?: Function;
  ref?: React.MutableRefObject<null>;
  id?: string;
}
export interface withChildrenProps extends commonProps {
  children?: ReactElement | string;
}
