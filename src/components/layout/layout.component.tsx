import type { FC, PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

import { body } from "../../styles/fonts";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={twMerge(
        body.className,
        `
        flex
        min-h-full
        flex-col
        `
      )}
    >
      <Header />
      <main className="flex flex-grow flex-col bg-white">{children}</main>
      <Footer />
    </div>
  );
};
