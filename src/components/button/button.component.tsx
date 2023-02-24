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
  const target = href.startsWith("http") ? "_blank" : undefined;

  return (
    <Link
      {...otherProps}
      href={href}
      target={target}
      className={clsx(
        className,
        heading.className,
        "bg-black text-white justify-center py-3 px-8 text-lg inline-flex items-center gap-2 whitespace-nowrap",
        "md:text-xl md:py-4 md:px-10"
      )}
    >
      {children}
    </Link>
  );
};
