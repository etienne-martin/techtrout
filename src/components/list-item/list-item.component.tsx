import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

export const ListItem: FC<HTMLAttributes<HTMLElementTagNameMap["li"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <li
      {...otherProps}
      className={clsx(
        "text-lg md:text-xl leading-relaxed md:leading-relaxed",
        className
      )}
    >
      {children}
    </li>
  );
};
