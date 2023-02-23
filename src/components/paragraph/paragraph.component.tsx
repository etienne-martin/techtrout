import type { FC, PropsWithChildren } from "react";

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-lg md:text-xl leading-relaxed md:leading-relaxed">
      {children}
    </p>
  );
};
