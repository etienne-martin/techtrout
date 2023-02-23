import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

export const Anchor: FC<HTMLAttributes<HTMLElementTagNameMap["a"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <a {...otherProps} className={clsx("text-red-400", className)}>
      {children}
    </a>
  );
};
