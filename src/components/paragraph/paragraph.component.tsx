import type { FC, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export const Paragraph: FC<HTMLAttributes<HTMLElementTagNameMap["p"]>> = ({
  children,
  className,
}) => {
  return (
    <p
      className={twMerge(
        `
        text-base
        leading-relaxed
        sm:text-lg
        sm:leading-relaxed
        md:text-xl
        md:leading-relaxed
        `,
        className
      )}
    >
      {children}
    </p>
  );
};
