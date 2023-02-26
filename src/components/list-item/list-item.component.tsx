import type { FC, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export const ListItem: FC<HTMLAttributes<HTMLElementTagNameMap["li"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <li
      {...otherProps}
      className={twMerge(
        `
        text-lg
        md:text-xl
        leading-relaxed
        md:leading-relaxed
        `,
        className
      )}
    >
      {children}
    </li>
  );
};
