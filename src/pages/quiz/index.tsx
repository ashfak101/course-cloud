import Head from "next/head";
import { Box } from "@mui/material"
import QuizHome from "components/quiz/QuizHome";

 type QuizProps={
     quizs:[object]
 }

const Quiz =(props:QuizProps)=>{
    console.log(props.quizs)
    
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