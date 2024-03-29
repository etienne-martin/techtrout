import type { FC, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export const OrderedList: FC<HTMLAttributes<HTMLElementTagNameMap["ol"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <ol
      {...otherProps}
      className={twMerge(
        `
        grid
        list-decimal
        gap-y-2.5
        pl-8
        `,
        className
      )}
    >
      {children}
    </ol>
  );
};
