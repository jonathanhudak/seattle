import { Flex, Text } from "rebass";

export default function Hero({ page }) {
  const { hero_image: hero, hero_title: title } = page.acf;

  if (!hero) return null;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: [
          `url(${hero.sizes.medium})`,
          `url(${hero.sizes.large})`,
          `url(${hero.sizes["post-thumbnail"]})`
        ],
        backgroundColor: "#494919",
        backgroundBlendMode: "screen",
        backgroundSize: "cover",
        height: 500
      }}
    >
      <Text
        as="h1"
        color="white"
        fontFamily="body"
        fontSize={[5, 6]}
        mb={5}
        fontWeight={2}
      >
        {title}
      </Text>
    </Flex>
  );
}
