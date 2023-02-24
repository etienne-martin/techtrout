import type { HTMLAttributes } from "react";
import { createElement } from "react";

import { twMerge } from "tailwind-merge";

interface ContainerProps<Tag extends keyof HTMLElementTagNameMap>
  extends HTMLAttributes<HTMLElementTagNameMap[Tag]> {
  as?: Tag;
}

export const Container = <Tag extends keyof HTMLElementTagNameMap = "div">({
  as,
  className,
  ...otherProps
}: ContainerProps<Tag>) => {
  return createElement(as ?? "div", {
    ...otherProps,
    className: twMerge(
      `
      container
      mx-auto
      lg:max-w-3xl
      px-4
      `,
      className
    ),
  });
};
