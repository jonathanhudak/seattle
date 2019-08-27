// import { ThemeProvider } from "theme-ui";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import theme from "../style/theme";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";
import { Heading, Text, Button } from "rebass";
import Container from "../components/Container";
import { Styled } from "theme-ui";
import Link from "next/link";

console.log("theme", theme);

const NavLink = props => (
  <Text
    {...props}
    as="a"
    fontFamily="body"
    sx={{
      textDecoration: "none",
      ml: 2
    }}
  />
);

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Meta />
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <header>
      <Container alignItems="center" py={3}>
        <Heading fontSize={[3, 4]} color="primary" fontFamily="body">
          <Link href="/" passHref>
            <a>Seattle</a>
          </Link>
        </Heading>
        <Link href="/coaching" passHref>
          <NavLink>Coaching</NavLink>
        </Link>
        <Link href="/contact" passHref>
          <Button variant="outline" ml={2} as="a" fontFamily="body">
            Contact!
          </Button>
        </Link>
      </Container>
    </header>

    {children}
    <Footer />
  </ThemeProvider>
);
