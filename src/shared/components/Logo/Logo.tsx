import LogoSvg from "@assets/logo.svg";

const Logo = ({ width, height }: { width?: string; height?: string }) => {
  return <img src={LogoSvg} alt="logo" width={width} height={height} />;
};

export default Logo;
