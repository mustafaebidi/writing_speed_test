

import { useRef } from "react"
import {useGlobalContext} from "../../context"
import "./wordform.css"
const WordForm=()=>{

    const{currentWord,setWordInTheInput,wordInTheInput}=useGlobalContext()

    const wordValue = useRef('')

    const handleChange=()=>{
        
        setWordInTheInput(wordValue.current.value)
    }

    return(

    <div className="form">
        <h2>
            {currentWord}
        </h2>
        <form>
            <input ref={wordValue} onChange={handleChange} value={wordInTheInput}/>
        </form>
    </div>
    )


}

export default WordForm