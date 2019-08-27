import "isomorphic-unfetch";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/main";
import { Heading, Text } from "rebass";
import Container from "../../components/Container";
import Content from "../../components/Content";

function Article({ article }) {
  const router = useRouter();
  const { articleSlug } = router.query;
  useEffect(() => {
    if (!article) {
      router.push("/404");
    }
  }, [article]);

  function createTitleMarkup() {
    return { __html: article.title.rendered };
  }

  return (
    <Layout>
      <Heading
        as="h1"
        fontSize={[5, 6, 7]}
        fontFamily="body"
        dangerouslySetInnerHTML={createTitleMarkup()}
      />
      <Container>
        <Content content={article.content} />
      </Container>
    </Layout>
  );
}

Article.getInitialProps = async ({ query, res }) => {
  // if (["favicon"].includes(query.slug)) return null;

  const data = await fetch(
    `${process.env.apiEndpoint}/wp-json/wp/v2/posts?slug=${query.articleSlug}`
  ).catch(console.log);

  const [article] = await data.json();

  return { article };
};

export default Article;
