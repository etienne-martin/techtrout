import type { FC } from "react";

import type { ImageProps } from "next/dist/client/image";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const FancyImage: FC<ImageProps> = ({ src, alt, ...otherProps }) => {
  return (
    <figure className="mt-10 -mx-4 sm:-mx-0">
      <div className="relative">
        <div
          className={twMerge(
            `
            absolute
            top-0
            left-0
            right-0
            bottom-0
            -translate-x-5
            -translate-y-5
            pointer-events-none
            z-10
            `
          )}
        >
          <span className="absolute top-0 left-0 right-0 backdrop-invert backdrop-saturate-0 h-px" />
          <span className="absolute top-px bottom-px right-0 backdrop-invert backdrop-saturate-0 w-px" />
          <span className="absolute bottom-0 left-0 right-0 backdrop-invert backdrop-saturate-0 h-px" />
          <span className="absolute top-px bottom-px left-0 backdrop-invert backdrop-saturate-0 w-px" />
        </div>
        <Image
          {...otherProps}
          src={src}
          alt={alt}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 768px"
          className="saturate-0"
        />
      </div>
      <figcaption className="mt-2.5 text-xs px-4 sm:px-0">{alt}</figcaption>
    </figure>
  );
};
