import type { FC } from "react";

import Link from "next/link";

import { Container } from "../container/container.component";
import { Logo } from "../logo/logo.component";

export const Header: FC = () => {
  return (
    <header className="border-solid border-b border-b-black py-5 md:py-8 bg-red-400 text-white">
      <Container className="flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/" className="space-y-1.5">
          <div className="w-10 h-0.5 bg-current"></div>
          <div className="w-10 h-0.5 bg-current"></div>
          <div className="w-10 h-0.5 bg-current"></div>
        </Link>
      </Container>
    </header>
  );
};
