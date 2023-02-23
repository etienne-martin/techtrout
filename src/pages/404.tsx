import type { NextPage } from "next";

import { Button } from "../components/button/button.component";
import { Container } from "../components/container/container.component";
import { Heading } from "../components/heading/heading.component";
import { Paragraph } from "../components/paragraph/paragraph.component";
import { TwitterIcon } from "../components/twitter-icon/twitter-icon.component";
import { TWITTER_URL } from "../config";

const Home: NextPage = () => {
  return (
    <Container className="grid gap-8 self-center py-24">
      <div className="self-center flex flex-col items-start gap-6 md:gap-8 max-w-lg">
        <Heading.h1>This website does not actually exist.</Heading.h1>
        <Paragraph>
          You can try browsing the site, but chances are you will be
          disappointed. Try following us on twitter instead.
        </Paragraph>
        <Button href={TWITTER_URL} target="_blank">
          <TwitterIcon className="w-5 h-5" />
          Follow us on Twitter
        </Button>
      </div>
    </Container>
  );
};

export default Home;
