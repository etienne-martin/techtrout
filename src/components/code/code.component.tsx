import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

export const Code: FC<HTMLAttributes<HTMLElementTagNameMap["code"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <code
      {...otherProps}
      className={clsx("block bg-neutral-100 p-5", className)}
    >
      {children}
    </code>
  );
};
