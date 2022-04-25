

import {useGlobalContext} from "../../context"
import "./Level.css"
const Level=({setLevel,level})=>{

    const {startGame} =useGlobalContext()

    return(<div className={`level ${startGame && "active"}`}>
        {["Easy", "Normal", "Hard"].map((name) => {
        return (
            <div key={name} className={level===name ? `active` :"" } onClick={()=>setLevel(name)} >{name}</div>)
        })
        }
    </div>)



}

export default Level