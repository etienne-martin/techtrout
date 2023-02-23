import type { FC, AnchorHTMLAttributes } from "react";

import { clsx } from "clsx";
import Link from "next/link";

import { heading } from "../../styles/fonts";

export const Button: FC<AnchorHTMLAttributes<HTMLElementTagNameMap["a"]>> = ({
  href,
  className,
  children,
  ...otherProps
}) => {
  return (
    <Link
      {...otherProps}
      href={href}
      className={clsx(
        className,
        heading.className,
        "bg-black text-white text-center py-3 px-8 text-lg inline-flex items-center gap-2",
        "md:text-xl md:py-4 md:px-10"
      )}
    >
      {children}
    </Link>
  );
};
