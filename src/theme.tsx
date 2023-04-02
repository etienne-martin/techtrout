import Head from "next/head";
import type { NextraThemeLayoutProps } from "nextra";
import { MDXProvider } from "nextra/mdx";

import { Anchor } from "./components/anchor/anchor.component";
import { Code } from "./components/code/code.component";
import { Container } from "./components/container/container.component";
import { FancyImage } from "./components/fancy-image/fancy-image.component";
import { Heading } from "./components/heading/heading.component";
import { HorizontalRuler } from "./components/horizontal-ruler/horizontal-ruler.component";
import { ListItem } from "./components/list-item/list-item.component";
import { Metadata } from "./components/metadata/metadata.component";
import { OrderedList } from "./components/ordered-list/ordered-list.component";
import { Paragraph } from "./components/paragraph/paragraph.component";
import { Promo } from "./components/promo/promo.component";
import { Quote } from "./components/quote/quote.component";
import { UnorderedList } from "./components/unordered-list/unordered-list.component";
import { SITE_NAME, TWITTER_HANDLE } from "./config";

// eslint-disable-next-line import/no-default-export
export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, route, frontMatter } = pageOpts;
  const isStory = route.startsWith("/story/");
  const { ogTitle = title, ogDescription } = frontMatter;

  if (isStory && !ogDescription?.trim()) {
    throw new Error("Missing og:description");
  }

  return (
    <>
      <Head>
        <title>{`${title} — ${SITE_NAME}`}</title>

        <meta property="og:title" content={ogTitle} />
        <meta name="twitter:title" content={ogTitle} />

        {ogDescription && (
          <>
            <meta property="og:description" content={ogDescription} />
            <meta property="twitter:description" content={ogDescription} />
          </>
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${TWITTER_HANDLE}`} />
      </Head>
      <Container as="article" className="my-8 grid gap-5 md:my-16">
        <MDXProvider
          components={{
            h1: Heading.h1,
            h2: Heading.h2,
            h3: Heading.h3,
            h4: Heading.h4,
            h5: Heading.h5,
            h6: Heading.h6,
            p: Paragraph,
            hr: HorizontalRuler,
            a: Anchor,
            blockquote: Quote,
            li: ListItem,
            ol: OrderedList,
            ul: UnorderedList,
            code: Code,
            Metadata,
            FancyImage,
          }}
        >
          {children}
        </MDXProvider>
        {isStory && (
          <div className="md:mt-8">
            <Promo />
          </div>
        )}
      </Container>
    </>
  );
}
