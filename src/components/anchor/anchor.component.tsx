import type { AnchorHTMLAttributes, FC } from "react";

import { clsx } from "clsx";

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
      className={clsx("text-red-400", className)}
    >
      {children}
    </a>
  );
};
