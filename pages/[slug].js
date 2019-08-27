import "isomorphic-unfetch";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layouts/main";
import { Heading, Text } from "rebass";
import Content from "../components/Content";
import Container from "../components/Container";
import Hero from "../components/Hero";

function getTemplateForPage(slug) {
  switch (slug) {
    default:
      return page => <Content content={page.content} />;
  }
}

function Page({ page }) {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (!page) {
      router.push("/404");
    }
  }, [page]);

  return (
    <Layout>
      <Hero page={page} />
      <Container flexDirection="column">
        <Content content={page.content} />
      </Container>
    </Layout>
  );
}

Page.getInitialProps = async ({ query, res }) => {
  if (["favicon"].includes(query.slug)) return null;

  const data = await fetch(
    `${process.env.apiEndpoint}/wp-json/wp/v2/pages?slug=${query.slug}`
  ).catch(console.log);

  const [page] = await data.json();

  return { page };
};

export default Page;
