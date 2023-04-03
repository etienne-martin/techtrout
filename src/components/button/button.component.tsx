import type { FC, AnchorHTMLAttributes } from "react";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { heading } from "../../styles/fonts";

export const Button: FC<AnchorHTMLAttributes<HTMLElementTagNameMap["a"]>> = ({
  href,
  className,
  children,
  ...otherProps
}) => {
  const isExternal = href.startsWith("http");
  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noreferrer" : undefined;

  return (
    <Link
      {...otherProps}
      href={href}
      target={target}
      rel={rel}
      className={twMerge(
        heading.className,
        `
        inline-flex
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        bg-black
        py-3
        px-8
        text-lg
        text-white
        md:py-4
        md:px-10
        md:text-xl
        `,
        className
      )}
    >
      {children}
    </Link>
  );
};
