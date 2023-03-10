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
        sm:text-lg
        md:text-xl
        leading-relaxed
        sm:leading-relaxed
        md:leading-relaxed
        `,
        className
      )}
    >
      {children}
    </p>
  );
};
