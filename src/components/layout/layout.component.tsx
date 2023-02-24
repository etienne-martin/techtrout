import type { FC, PropsWithChildren } from "react";

import { clsx } from "clsx";

import { body } from "../../styles/fonts";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsx(body.className, "flex flex-col min-h-full")}>
      <Header />
      <main className="flex flex-grow flex-col">{children}</main>
      <Footer />
    </div>
  );
};
