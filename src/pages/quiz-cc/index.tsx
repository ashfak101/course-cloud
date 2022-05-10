import QuizCCHome from "components/quizcc/QuizCCHome";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import { QuestionsCC } from "types/questionTypes";

type QuizProps = {
  quizQuestions: QuestionsCC[];
  quizAnswers: QuestionsCC[];
};

const QuizCC = ({ quizQuestions, quizAnswers }: QuizProps) => {
  const dispatch = useDispatch();

  /**  @for createing random array of numbers form 0-10 **/
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
  }, [dispatch]);

  const randomQuizArray = useSelector(
    (state: State) => state.quizCCResult.shuffleArray
  );

  /**  @for setting question and answer to redux store from according to created random array of numbers **/
  useEffect(() => {
    const randomQuestions: any = [];
    const randomAnswers: any = [];
    randomQuizArray.forEach((elem: any) => {
      randomQuestions.push(quizQuestions[elem]);
      randomAnswers.push(quizAnswers[elem]);
    });

    dispatch({
      type: "RANDOM_QUIZ_QUESTIONS",
      payload: randomQuestions,
    });
    dispatch({
      type: "RANDOM_QUIZ_ANSWERS",
      payload: randomAnswers,
    });
  }, [quizQuestions, quizAnswers, randomQuizArray, dispatch]);

  return (
    <>
      <Head>
        <title>Course Cloud || Quiz</title>
      </Head>
      <QuizCCHome />
    </>
  );
};

export default QuizCC;

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch("https://jsonkeeper.com/b/PE5P");
  const quesRes = await fetch("https://jsonkeeper.com/b/4EYY");

  const quizQuestions = await quesRes.json();

  const ansRes = await fetch("https://jsonkeeper.com/b/PHO9");
  const quizAnswers = await ansRes.json();

  return {
    props: {
      quizQuestions,
      quizAnswers,
    },
  };
};
