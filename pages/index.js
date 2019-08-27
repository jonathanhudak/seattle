import "isomorphic-unfetch";
import Page from "../layouts/main";
import Container from "../components/Container";
import { Box, Flex, Text } from "rebass";
import Content from "../components/Content";
import Hero from "../components/Hero";
import getConfig from "next/config";
import ArticleCard from "../components/ArticleCard";

function Home({ page, articles }) {
  function createContentMarkup() {
    return { __html: page.content.rendered };
  }
  const { hero_image, hero_title } = page.acf;

  return (
    <Page>
      <Flex
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage: [
            `url(${hero_image.sizes.medium})`,
            `url(${hero_image.sizes.large})`,
            `url(${hero_image.sizes["post-thumbnail"]})`
          ],
          backgroundSize: "cover",
          height: 500
        }}
      >
        <Text color="white" fontFamily="body" fontSize={[5, 6]}>
          {hero_title}
        </Text>
      </Flex>

      <Box
        sx={{
          display: "grid",
          gridGap: 4,
          maxWidth: 1000,
          m: "auto",
          gridTemplateColumns: "1fr 1fr"
        }}
      >
        {articles.map(article => (
          <ArticleCard article={article} />
        ))}
      </Box>
    </Page>
  );
}

Home.getInitialProps = async ({ req }) => {
  console.log(process.env);
  const { publicRuntimeConfig } = getConfig();
  console.log(publicRuntimeConfig);
  const pageData = await fetch(
    `${process.env.apiEndpoint}/wp-json/wp/v2/pages?slug=home`
  ).catch(console.log);

  const articlesData = await fetch(
    `${process.env.apiEndpoint}/wp-json/wp/v2/posts?_embed`
  ).catch(console.log);

  const [page] = await pageData.json();
  const articles = await articlesData.json();

  return { page, articles };
};

export default Home;
