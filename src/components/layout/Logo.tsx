import LogoDarkText from "assets/icons/LogoDarkText";
import LogoLightText from "assets/icons/LogoLightText";

const Logo = ({ variant = "dark" }) => {
  let content = null;

  console.log(variant === "dark");
  content = variant === "dark" ? <LogoDarkText /> : <LogoLightText />;

  return <div>{content}</div>;
};

export default Logo;
