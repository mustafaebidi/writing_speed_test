
import {useGlobalContext} from "../../context"
import "./startwindow.css"

const StartWindow=()=>{

    const {StartApp,startGame} =useGlobalContext()


    if(startGame){
        return  ;
    }
    return(
        

        <div className="window-start">
            <div className="start" onClick={()=>StartApp()}>Start</div>
        </div>
        


    )

}

export default StartWindow