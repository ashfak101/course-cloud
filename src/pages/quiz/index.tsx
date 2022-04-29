import Head from "next/head";
import { Box } from "@mui/material";
import QuizHome from "components/quiz/QuizHome";

import Quiz from "models/quizModels";



type QuizProps = {
    quizs: Quiz[]
}

const Quiz = (props: QuizProps) => {
    const quizs = props.quizs

    function shuffle(quizs: any) {
        let currentIndex = quizs.length, randomIndex;

        
        while (currentIndex != 0) {

            
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            
            [quizs[currentIndex], quizs[randomIndex]] = [
                quizs[randomIndex], quizs[currentIndex]];
        }

        return quizs;
    }

    
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
    const res = await fetch('https://tawsifhye.github.io/data/coursecloudquiz.json')

    const quizs = await res.json()

    return {
        props: {
            quizs
        }
    }
}
