import type { FC } from "react";

import getConfig from "next/config";
import type { ImageProps } from "next/dist/client/image";
import Head from "next/head";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const { origin } = getConfig().publicRuntimeConfig;

const getImageUrl = (src: ImageProps["src"]) => {
  if (typeof src === "string") {
    return src;
  } else if ("default" in src) {
    return src.default.src;
  }
};

export const FancyImage: FC<ImageProps> = ({ src, alt, ...otherProps }) => {
  const absoluteUrl = `${origin}/_next/image?${new URLSearchParams({
    url: getImageUrl(src),
    w: "1920",
    q: "75",
  })}`;

  return (
    <>
      <Head>
        <meta property="og:image" content={absoluteUrl} />
        <meta property="twitter:image" content={absoluteUrl} />
      </Head>
      <figure className="-mx-4 mt-5 sm:-mx-0 md:mt-10">
        <div className="relative">
          <div
            className={twMerge(
              `
            pointer-events-none
            absolute
            top-0
            left-0
            right-0
            bottom-0
            z-10
            -translate-x-5
            -translate-y-5
            `
            )}
          >
            <span className="absolute top-0 left-0 right-0 h-px backdrop-invert backdrop-saturate-0" />
            <span className="absolute top-px bottom-px right-0 w-px backdrop-invert backdrop-saturate-0" />
            <span className="absolute bottom-0 left-0 right-0 h-px backdrop-invert backdrop-saturate-0" />
            <span className="absolute top-px bottom-px left-0 w-px backdrop-invert backdrop-saturate-0" />
          </div>
          <Image
            {...otherProps}
            src={src}
            alt={alt}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <figcaption className="mt-2.5 px-4 text-xs sm:px-0">{alt}</figcaption>
      </figure>
    </>
  );
};
