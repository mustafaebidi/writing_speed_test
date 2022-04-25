
import {useGlobalContext} from "../../context"

import "./selectedword.css"

const SelectedWords=()=>{

    const {selectedType}=useGlobalContext()
    console.log(selectedType.allWords)

    selectedType.allWords.map((word)=>{
        return(
            <div>{word}</div>
        )
    })

    
    

    return(
        <div className="main-words">
            {selectedType.allWords && 
                selectedType.allWords.map((word,idx)=>{
                    return(
                        <div key={idx}>{word}</div>
                    )
                })
            }
        </div>
    )

}

export default SelectedWords