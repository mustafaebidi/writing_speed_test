
import {useGlobalContext} from "../../context"

import "./selectedword.css"

const SelectedWords=()=>{

    const {selectedType}=useGlobalContext()

    
    
    return(
        <div className="main-words">
            {selectedType.allWords?.map((word,idx)=>{
                    return(
                        <div key={idx}>{word}</div>
                    )
                })
            }
        </div>
    )

}

export default SelectedWords