import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

export const Quote: FC<HTMLAttributes<HTMLElementTagNameMap["blockquote"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <blockquote
      {...otherProps}
      className={clsx(
        "text-3xl p-4 border-black border shadow-[4px_4px_0_0_black]",
        className
      )}
    >
      {children}
    </blockquote>
  );
};
