import QuizCCHome from "components/quizcc/QuizCCHome";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { useDispatch } from "react-redux";
import { QuestionsCC } from "types/questionTypes";

type QuizProps = {
  quizQuestions: QuestionsCC[];
};

const QuizCC = ({ quizQuestions }: QuizProps) => {
  const dispatch = useDispatch();

  const shuffle = () => {
    let randomArray: number[] = [];

    while (randomArray.length < 10) {
      let r = Math.floor(Math.random() * 19) + 1;
      if (randomArray.indexOf(r) === -1) randomArray.push(r);
    }

    randomArray.forEach((elem: any) => {
      console.log(quizQuestions[elem]);
    });

    dispatch({
      type: "SHUFFLE_ARRAY",
      payload: randomArray,
    });

    console.log(randomArray);
  };

  shuffle();

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
  // const res = await fetch("https://jsonkeeper.com/b/PE5P");
  const res = await fetch("https://jsonkeeper.com/b/KF28");

  const quizQuestions = await res.json();
  return {
    props: {
      quizQuestions,
    },
  };
};
