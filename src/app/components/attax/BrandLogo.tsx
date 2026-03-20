import mainLogoBlack from "../../../assets/main-logo-black.svg";

interface BrandLogoProps {
  light?: boolean;
  className?: string;
}

export function BrandLogo({ light = false, className }: BrandLogoProps) {
  if (!light) {
    return (
      <img
        src={mainLogoBlack}
        alt="ATTAX Solutions"
        className={className ?? "h-[40px] w-auto object-contain"}
      />
    );
  }

  // Light variant   footer logo will be swapped in once provided
  return (
    <img
      src={mainLogoBlack}
      alt="ATTAX Solutions"
      className={`h-auto object-contain brightness-0 invert ${className ?? "w-[40px]"}`}
    />
  );
}
