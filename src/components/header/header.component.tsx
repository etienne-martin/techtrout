import type { FC } from "react";

import Link from "next/link";

import { Container } from "../container/container.component";
import { Logo } from "../logo/logo.component";

export const Header: FC = () => {
  return (
    <header className="border-b border-solid border-black bg-black py-5 text-white md:py-8">
      <Container className="flex items-center justify-between">
        <Link href="/" aria-label="Go to the homepage">
          <Logo />
        </Link>
        <Link href="/" className="w-8 space-y-1.5" aria-label="Open main menu">
          <div className="h-0.5 w-full bg-current"></div>
          <div className="h-0.5 w-full bg-current"></div>
          <div className="h-0.5 w-full bg-current"></div>
        </Link>
      </Container>
    </header>
  );
};
