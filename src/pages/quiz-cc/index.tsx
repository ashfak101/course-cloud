import QuizCCHome from "components/quizcc/QuizCCHome";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import { QuestionsCC } from "types/questionTypes";

type QuizProps = {
  quizQuestions: QuestionsCC[];
};

const QuizCC = ({ quizQuestions }: QuizProps) => {
  const dispatch = useDispatch();

  // const shuffle = () => {
  //   let randomArray: number[] = [];
  //   while (randomArray.length < 10) {
  //     let r = Math.floor(Math.random() * 19) + 1;
  //     if (randomArray.indexOf(r) === -1) randomArray.push(r);
  //   }
  //   randomArray.forEach((elem: any) => {
  //     console.log(quizQuestions[elem]);
  //   });
  //   dispatch({
  //     type: "SHUFFLE_ARRAY",
  //     payload: randomArray,
  //   });
  //   console.log(randomArray);
  // };
  // shuffle();

  useEffect(() => {
    let randomArray: number[] = [];
    while (randomArray.length < 10) {
      let r = Math.floor(Math.random() * 19);
      if (randomArray.indexOf(r) === -1) randomArray.push(r);
    }

    dispatch({
      type: "SHUFFLE_ARRAY",
      payload: randomArray,
    });
  }, [quizQuestions, dispatch]);

  const randomQuizArray = useSelector(
    (state: State) => state.quizCCResult.shuffleArray
  );
  console.log(randomQuizArray);

  randomQuizArray.forEach((elem: any) => {
    console.log(quizQuestions[elem]);
  });

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
  const res = await fetch("https://jsonkeeper.com/b/4EYY");

  const quizQuestions = await res.json();
  return {
    props: {
      quizQuestions,
    },
  };
};
