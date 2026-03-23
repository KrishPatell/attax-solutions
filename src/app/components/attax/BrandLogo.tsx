import mainLogoPng from "../../../assets/logo-main-.png";

interface BrandLogoProps {
  light?: boolean;
  className?: string;
}

/**
 * iOS Safari can blur small bitmaps inside transformed layers.
 * This logo uses the new higher-res PNG and is rendered inside a GPU-friendly
 * compositing shell with explicit intrinsic dimensions.
 */
const crispShell =
  "inline-flex shrink-0 items-center isolate [transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden]";

export function BrandLogo({ light = false, className }: BrandLogoProps) {
  // Match PNG pixels so layout + HiDPI scaling uses full source resolution
  const intrinsic = { width: 2165, height: 970 } as const;

  if (!light) {
    return (
      <span className={crispShell}>
        <img
          src={mainLogoPng}
          alt="ATTAX Solutions"
          {...intrinsic}
          decoding="sync"
          draggable={false}
          className={className ?? "h-[45px] w-auto object-contain object-left"}
        />
      </span>
    );
  }

  // Light variant — footer logo (invert on dark bg)
  return (
    <span className={crispShell}>
      <img
        src={mainLogoPng}
        alt="ATTAX Solutions"
        {...intrinsic}
        decoding="sync"
        draggable={false}
        className={`h-auto max-h-[48px] w-auto object-contain object-left brightness-0 invert ${className ?? "w-[40px]"}`}
      />
    </span>
  );
}
