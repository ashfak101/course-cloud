import { useSelector } from "react-redux"
import { State } from "redux/reducers";

const ResultsHome = () => {
    
    const allAnswer= useSelector((state:State)=>state.allAnswer)
    console.log(allAnswer);
    
  return (
    <div>ResultsHome</div>
  )
}

export default ResultsHome