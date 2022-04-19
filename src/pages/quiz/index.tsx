import { Box, Typography } from "@mui/material"
import QuizHome from "components/quiz/QuizHome";
import Head from "next/head";

const Quiz =()=>{
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