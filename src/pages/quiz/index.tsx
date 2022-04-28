import Head from "next/head";
import { Box } from "@mui/material"
import QuizHome from "components/quiz/QuizHome";

import Quiz from "models/quizModels";


type QuizProps = {
    quizs: Quiz[]
}

const Quiz = (props: QuizProps) => {
    const quizs = props.quizs

    function shuffle(quizs: any) {
        let currentIndex = quizs.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [quizs[currentIndex], quizs[randomIndex]] = [
                quizs[randomIndex], quizs[currentIndex]];
        }

        return quizs;
    }

    // Used like so
    shuffle(quizs);
    console.log(quizs);

    return <>
        <Head>
            <title>Course Cloud || Quiz</title>
        </Head>
        <Box>
            <QuizHome quizs={quizs} />
        </Box>
    </>
}

export default Quiz;


export async function getStaticProps() {
    const res = await fetch('https://tawsifhye.github.io/data/quizes.json')

    const quizs = await res.json()

    return {
        props: {
            quizs
        }
    }
}