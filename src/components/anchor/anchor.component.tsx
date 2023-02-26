import type { AnchorHTMLAttributes, FC } from "react";

import { twMerge } from "tailwind-merge";

export const Anchor: FC<AnchorHTMLAttributes<HTMLElementTagNameMap["a"]>> = ({
  href,
  children,
  className,
  ...otherProps
}) => {
  const isExternal = href.startsWith("http");
  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noreferrer" : undefined;

  return (
    <a
      {...otherProps}
      href={href}
      target={target}
      rel={rel}
      className={twMerge(
        `
        text-red-400
        hover:underline
      `,
        className
      )}
    >
      {children}
    </a>
  );
};
