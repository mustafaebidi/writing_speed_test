

import { useRef } from "react"
import {useGlobalContext} from "../../context"
import "./wordform.css"
const WordForm=()=>{

    const{currentWord,setWordInTheInput,wordInTheInput}=useGlobalContext()

    const wordValue = useRef('')

    const handleChange=()=>{
        
        setWordInTheInput(wordValue.current.value)
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
    }

    return(

    <div className="form">
        <h2>
            {currentWord}
        </h2>
        <form onSubmit={handleSubmit}>
            <input ref={wordValue} onChange={handleChange} value={wordInTheInput} onPaste={(e)=> {
                e.preventDefault()
                return false;
            }}/>
        </form>
    </div>
    )


}

export default WordForm