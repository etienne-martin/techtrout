import type { FC, HTMLAttributes } from "react";
import { createElement } from "react";

import { clsx } from "clsx";

interface ContainerProps extends HTMLAttributes<HTMLElementTagNameMap["div"]> {
  as?: string;
}

export const Container: FC<ContainerProps> = ({
  as = "div",
  className,
  ...otherProps
}) => {
  return createElement(as, {
    ...otherProps,
    className: clsx(className, "container mx-auto lg:max-w-3xl px-4"),
  });
};
