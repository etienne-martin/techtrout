import type { FC, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import { Box } from "../box/box.component";

export const Quote: FC<HTMLAttributes<HTMLElementTagNameMap["blockquote"]>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Box
      as="blockquote"
      {...otherProps}
      className={twMerge("italic", className)}
    >
      {children}
    </Box>
  );
};
