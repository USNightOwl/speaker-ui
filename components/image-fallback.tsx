"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageFallback({
  src,
  alt,
  fallbackSrc,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  fallbackSrc: string;
  className: string;
  width: number;
  height: number;
}) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      loading="lazy"
      alt={alt}
      className={className}
      src={imgSrc}
      width={width}
      height={height}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}
