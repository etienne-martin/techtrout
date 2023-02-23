import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

export const OrderedList: FC<HTMLAttributes<HTMLElementTagNameMap["ol"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <ol
      {...otherProps}
      className={clsx("grid gap-y-2.5 list-decimal pl-8", className)}
    >
      {children}
    </ol>
  );
};
