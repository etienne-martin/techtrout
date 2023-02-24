import type { FC } from "react";

import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { SITE_NAME, TWITTER_URL } from "../../config";
import { Container } from "../container/container.component";
import { Logo } from "../logo/logo.component";

export const Footer: FC = () => {
  return (
    <footer className="bg-black py-12 text-white mt-auto">
      <Container as="footer">
        <div className="grid gap-8">
          <div>
            <Link href="/" className="inline-flex">
              <Logo />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-8">
              <p className="text-sm">
                <Balancer>
                  The most trustworthy source of satirical tech news on the
                  internet. Join us as we explore the increasingly depressing
                  landscape of technology, and discover what the future holds
                  for all of us.
                </Balancer>
              </p>
            </div>
            <ul className="columns-2 gap-4 text-sm text-neutral-500">
              <li>
                <Link href="/" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Press centre
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Subscribe
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  RSS Feed
                </Link>
              </li>
              <li>
                <Link href={TWITTER_URL} className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <hr className="border-neutral-800" />
          <p className="text-neutral-700 text-xs">
            We&apos;re not here to inform you. Our content is intentionally
            exaggerated in order to comment on current events in a satirical
            way. These articles are used to point out flaws in the tech industry
            or to highlight the absurdity of certain situations. While our
            content may look like serious tech news at first glance, it&apos;s
            not meant to be taken seriously. If you&apos;re looking for actual
            news, you&apos;ve come to the wrong place.
          </p>
          <p className="text-neutral-700 text-xs">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </Container>
    </footer>
  );
};
