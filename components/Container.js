import React from "react";
import { Box, Flex } from "rebass";
/** @jsx jsx */
import { jsx } from "theme-ui";

export default props => (
  <Flex
    {...props}
    sx={{
      maxWidth: "container",
      mx: "auto",
      px: 3
    }}
  />
);
