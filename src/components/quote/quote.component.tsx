import type { FC, HTMLAttributes } from "react";

import { Box } from "../box/box.component";

export const Quote: FC<HTMLAttributes<HTMLElementTagNameMap["blockquote"]>> = ({
  children,
  ...otherProps
}) => {
  return (
    <Box as="blockquote" {...otherProps}>
      {children}
    </Box>
  );
};
