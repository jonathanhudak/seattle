import { Card, Heading, Text } from "rebass";
import Link from "next/link";

export default function ArticleCard({ article }) {
  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <Card p={3}>
      <Heading fontFamily="body" fontSize={[3, 4]}>
        <Link href={`/articles/${article.slug}`} passHref>
          <a dangerouslySetInnerHTML={createMarkup(article.title.rendered)} />
        </Link>
      </Heading>
      <Text dangerouslySetInnerHTML={createMarkup(article.excerpt.rendered)} />
    </Card>
  );
}
