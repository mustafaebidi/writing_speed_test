

import {useGlobalContext} from "../../context"
import "./score.css"

const Score=()=>{

    const {numberOfQuestions}=useGlobalContext()


    return(<div className='score'>
        Score :<span>{numberOfQuestions.rightQuestions}</span>From <span>{numberOfQuestions.lengthQuestions}</span>
    </div>
    )
    
}

export default Score