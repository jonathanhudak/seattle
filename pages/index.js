import "isomorphic-unfetch";

function Home({ posts }) {
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(
    `${process.env.apiEndpoint}/wp-json/wp/v2/posts`
  ).catch(console.log);

  const posts = await res.json();
  return { posts };
};

export default Home;
