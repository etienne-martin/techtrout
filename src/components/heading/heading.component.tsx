import { createElement } from "react";
import type { FC, HTMLAttributes } from "react";

import { clsx } from "clsx";
import Balancer from "react-wrap-balancer";
import { twMerge } from "tailwind-merge";

import { heading } from "../../styles/fonts";

type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
}

const makeHeading = (tag: HeadingTag): FC<HeadingProps> => {
  return function Heading({ as = tag, className, children, ...otherProps }) {
    return createElement(
      as,
      {
        ...otherProps,
        className: twMerge(
          heading.className,
          `
          font-bold
          leading-tight
          md:leading-tight
          `,
          clsx({
            "text-4xl md:text-5xl": as === "h1",
            "text-3xl md:text-4xl": as === "h2",
            "text-2xl md:text-3xl": as === "h3",
            "text-xl md:text-2xl": as === "h4",
            "text-lg md:text-xl": as === "h5",
            "text-base md:text-lg": as === "h6",
          }),
          className
        ),
      },
      <Balancer>{children}</Balancer>
    );
  };
};

export const Heading = {
  h1: makeHeading("h1"),
  h2: makeHeading("h2"),
  h3: makeHeading("h3"),
  h4: makeHeading("h4"),
  h5: makeHeading("h5"),
  h6: makeHeading("h6"),
};
