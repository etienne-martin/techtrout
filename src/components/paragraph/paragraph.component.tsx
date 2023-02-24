import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";

export const Paragraph: FC<HTMLAttributes<HTMLElementTagNameMap["p"]>> = ({
  children,
  className,
}) => {
  return (
    <p
      className={clsx(
        className,
        "text-lg md:text-xl leading-relaxed md:leading-relaxed"
      )}
    >
      {children}
    </p>
  );
};
