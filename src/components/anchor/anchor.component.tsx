import type { AnchorHTMLAttributes, FC } from "react";

import { twMerge } from "tailwind-merge";

export const Anchor: FC<AnchorHTMLAttributes<HTMLElementTagNameMap["a"]>> = ({
  href,
  children,
  className,
  ...otherProps
}) => {
  const target = href.startsWith("http") ? "_blank" : undefined;

  return (
    <a
      {...otherProps}
      href={href}
      target={target}
      className={twMerge(
        `
        text-red-400
      `,
        className
      )}
    >
      {children}
    </a>
  );
};
