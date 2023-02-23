import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

export const UnorderedList: FC<HTMLAttributes<HTMLElementTagNameMap["ol"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <ul
      {...otherProps}
      className={clsx("grid gap-y-2.5 list-disc pl-8", className)}
    >
      {children}
    </ul>
  );
};
