import type { FC } from "react";

import Link from "next/link";

import { Container } from "../container/container.component";
import { Logo } from "../logo/logo.component";

export const Header: FC = () => {
  return (
    <header className="border-solid border-b border-b-black py-5">
      <Container className="flex">
        <Link href="/">
          <Logo />
        </Link>
      </Container>
    </header>
  );
};
