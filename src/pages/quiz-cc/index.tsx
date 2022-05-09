import QuizCCHome from "components/quizcc/QuizCCHome";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { QuestionsCC } from "types/questionTypes";

type QuizProps = {
  quizQuestions: QuestionsCC[];
};

const QuizCC = ({ quizQuestions }: QuizProps) => {
  return (
    <>
      <Head>
        <title>Course Cloud || Quiz</title>
      </Head>
      <QuizCCHome quizQuestions={quizQuestions} />
    </>
  );
};

export default QuizCC;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonkeeper.com/b/PE5P");

  const quizQuestions = await res.json();
  return {
    props: {
      quizQuestions,
    },
  };
};
