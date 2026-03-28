import React, { useEffect, useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** If the primary `src` fails to load, try this URL once (e.g. bundled import). */
  fallbackSrc?: string;
};

export function ImageWithFallback(props: Props) {
  const { src, fallbackSrc, alt, style, className, onError, ...rest } = props;
  const [fatalError, setFatalError] = useState(false);
  const [activeSrc, setActiveSrc] = useState(() =>
    typeof src === "string" && src.length > 0 ? src : ""
  );

  useEffect(() => {
    setFatalError(false);
    setActiveSrc(typeof src === "string" && src.length > 0 ? src : "");
  }, [src]);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    if (fallbackSrc && activeSrc !== fallbackSrc) {
      setActiveSrc(fallbackSrc);
      return;
    }
    setFatalError(true);
    onError?.(e);
  };

  if (fatalError || !activeSrc) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    );
  }

  return (
    <img
      src={activeSrc}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      referrerPolicy="no-referrer"
      onError={handleError}
    />
  );
}
