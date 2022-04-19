import { Box, Typography } from "@mui/material"
import QuizHome from "components/quiz/QuizHome";
import Head from "next/head";

const Quiz =({quizs})=>{
    console.log(quizs)
    
    return<> 
            <Head>
                <title>Course Cloud || Quiz</title>
            </Head>
             <Box>
                <QuizHome/>
             </Box>
          </>
}

export default Quiz;


export async function  getStaticProps() {
    const res = await fetch('https://tawsifhye.github.io/data/quizes.json')

    const quizs= await res.json()

    return{
        props:{
            quizs
        }
    }
}