import type { FC } from "react";

import Balancer from "react-wrap-balancer";

import {
  GITHUB_URL,
  SITE_NAME,
  TWITTER_HANDLE,
  TWITTER_URL,
} from "../../config";
import { Anchor } from "../anchor/anchor.component";
import { Box } from "../box/box.component";
import { Button } from "../button/button.component";
import { Heading } from "../heading/heading.component";
import { Paragraph } from "../paragraph/paragraph.component";
import { TwitterIcon } from "../twitter-icon/twitter-icon.component";

export const Promo: FC = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <Box className="grid gap-4 p-8 text-red-400">
        <Heading.h2>Break the story</Heading.h2>
        <Paragraph>{SITE_NAME} is made possible by people like you.</Paragraph>
        <Button className="bg-red-400" href={GITHUB_URL}>
          Become a Contributor
        </Button>
      </Box>
      <Box className="grid gap-4 p-8">
        <Heading.h2>
          <span className="flex items-center">
            <TwitterIcon className="w-6 h-6 mr-3" /> Follow us
          </span>
        </Heading.h2>
        <Paragraph>
          <Balancer>
            Stay updated on the latest in tech — Follow us on Twitter{" "}
            <Anchor href={TWITTER_URL} className="font-medium">
              @{TWITTER_HANDLE}
            </Anchor>
          </Balancer>
        </Paragraph>
      </Box>
    </div>
  );
};
