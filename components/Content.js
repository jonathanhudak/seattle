import "isomorphic-unfetch";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../layouts/main";
import styled from "@emotion/styled";
import { Box } from "rebass";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const style = css``;

export default function Content({ content, ...props }) {
  function createContentMarkup() {
    return { __html: content.rendered };
  }
  return (
    <Box
      css={style}
      fontFamily="body"
      dangerouslySetInnerHTML={createContentMarkup()}
      {...props}
    />
  );
}
