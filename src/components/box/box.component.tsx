import type { HTMLAttributes } from "react";
import { createElement } from "react";

import { clsx } from "clsx";

interface BoxProps<Tag extends keyof HTMLElementTagNameMap>
  extends HTMLAttributes<HTMLElementTagNameMap[Tag]> {
  as?: Tag;
}

export const Box = <Tag extends keyof HTMLElementTagNameMap = "div">({
  as,
  className,
  ...otherProps
}: BoxProps<Tag>) => {
  return createElement(as ?? "div", {
    ...otherProps,
    className: clsx(
      className,
      "w-full px-8 py-4 border-current border shadow-[4px_4px_0_0_currentColor]"
    ),
  });
};
