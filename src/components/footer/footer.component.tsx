import type { FC } from "react";

import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { SITE_NAME, SLOGAN, TWITTER_URL } from "../../config";
import { Container } from "../container/container.component";
import { Logo } from "../logo/logo.component";

export const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-black py-8 text-white md:py-12">
      <Container as="footer">
        <div className="grid justify-items-start gap-8">
          <Link
            href="/"
            className="inline-flex"
            aria-label="Go to the homepage"
          >
            <Logo />
          </Link>
          <div className="grid w-full gap-5 md:grid-cols-2">
            <p className="text-sm">
              <Balancer>
                {SLOGAN} Join us as we explore the increasingly confusing
                landscape of technology, and discover what the future holds for
                all of us.
              </Balancer>
            </p>
            <nav>
              <ul className="columns-2 gap-0 text-sm text-neutral-400">
                {[
                  { name: "About", url: "/" },
                  { name: "Advertise", url: "/" },
                  { name: "Careers", url: "/" },
                  { name: "Contact Us", url: TWITTER_URL },
                  { name: "FAQ", url: "/" },
                  { name: "Press centre", url: "/" },
                  { name: "Privacy Policy", url: "/privacy" },
                  { name: "RSS Feed", url: "/" },
                  { name: "Subscribe", url: "/" },
                  { name: "Terms of Use", url: "/terms" },
                ].map(({ name, url }) => (
                  <li key={name} className="pr-4">
                    <Link href={url} className="hover:text-white">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <hr className="w-full border-neutral-800" />
          <p className="text-xs text-neutral-700">
            We&apos;re not here to inform you. Our content is intentionally
            exaggerated in order to comment on current events in a satirical
            way. These articles are used to point out flaws in the tech industry
            or to highlight the absurdity of certain situations. While our
            content may look like serious tech news at first glance, it&apos;s
            not meant to be taken seriously.
          </p>
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </Container>
    </footer>
  );
};
