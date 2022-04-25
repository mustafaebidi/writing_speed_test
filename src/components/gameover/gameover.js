import { Fragment } from "react";

import "./gameover.css"


const GameOver=()=>{

    const mystyle ={
        width:"250px",
        height:"250px",
    }
    return(
        <Fragment>
            <div className="game-over">
                <lord-icon src="https://cdn.lordicon.com/inrunzby.json" trigger="loop" style={mystyle} ></lord-icon>
                <h1>Game Over</h1>
            </div>
        </Fragment>

    )
}

export default GameOver;