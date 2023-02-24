import type { FC, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export const Code: FC<HTMLAttributes<HTMLElementTagNameMap["code"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <code
      {...otherProps}
      className={twMerge(
        `
        block
        bg-neutral-100
        p-5
        `,
        className
      )}
    >
      {children}
    </code>
  );
};
