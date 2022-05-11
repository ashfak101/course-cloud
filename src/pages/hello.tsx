import { Container } from "@mui/material";
import { GetStaticProps } from "next";
import React from "react";

const hello = ({ html }) => {
  console.log(html[0]);
  return (
    <Container sx={{ minHeight: "40vh" }}>
      Hello
      <div dangerouslySetInnerHTML={{ __html: html[0].html }}></div>
    </Container>
  );
};

export default hello;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonkeeper.com/b/NHRN");

  const html = await res.json();

  return {
    props: {
      html,
    },
  };
};
