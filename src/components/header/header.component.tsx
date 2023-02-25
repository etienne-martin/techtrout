import type { FC } from "react";

import Link from "next/link";

import { Container } from "../container/container.component";
import { Logo } from "../logo/logo.component";

export const Header: FC = () => {
  return (
    <header className="border-solid border-b border-black py-5 md:py-8 bg-black text-white">
      <Container className="flex justify-between items-center">
        <Link href="/" aria-label="Go to the homepage">
          <Logo />
        </Link>
        <Link href="/" className="space-y-1.5 w-8" aria-label="Open main menu">
          <div className="w-full h-0.5 bg-current"></div>
          <div className="w-full h-0.5 bg-current"></div>
          <div className="w-full h-0.5 bg-current"></div>
        </Link>
      </Container>
    </header>
  );
};
