import type { FC, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export const UnorderedList: FC<HTMLAttributes<HTMLElementTagNameMap["ol"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <ul
      {...otherProps}
      className={twMerge(
        `
        grid
        gap-y-2.5
        list-disc
        pl-8
        `,
        className
      )}
    >
      {children}
    </ul>
  );
};
