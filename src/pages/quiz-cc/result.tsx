import ResultQuizCC from "components/quizcc/ResultQuizCC";
import { GetStaticProps } from "next";
import React from "react";

const result = () => {
  return <ResultQuizCC />;
};

export default result;

// export const getStaticProps: GetStaticProps = async () => {
//   // const res = await fetch("https://jsonkeeper.com/b/96BD");
//   const res = await fetch("https://jsonkeeper.com/b/PHO9");

//   const quizAnswers = await res.json();
//   return {
//     props: {
//       quizAnswers,
//     },
//   };
// };
