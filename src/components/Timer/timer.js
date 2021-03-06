import { useEffect, useRef, useState } from 'react';


import { useGlobalContext } from "../../context"
import "./timer.css"



function Timer({ level, setChallenge }) {

    const { startGame, getNextWord } = useGlobalContext()


    const speedOfEachLevel = useRef({ Hard: 3, Normal: 5, Easy: 7 })


    const globalTimer = useRef()

    const [timer, setTimer] = useState(5)



    function startTimer() {
        globalTimer.current = setInterval(() => {
            setTimer((state) => state - 1)
        }, 1000);

    }

    useEffect(() => {
        if (startGame) {
            startTimer()
        }
    }, [startGame])

    useEffect(() => {

        if (timer < 1) {

            clearInterval(globalTimer.current)
            setTimer(speedOfEachLevel.current[level])
            getNextWord(startTimer, setChallenge)
        }

    }, [timer, getNextWord, setChallenge, level])


    useEffect(() => {

        setTimer((timer) => speedOfEachLevel.current[level])

    }, [level])


    return (
        <div className="timer">
            <div >Timer Left</div>
            <div className='number-time'>{timer}</div>
            <div>Secend</div>
        </div>
    )


}


export default Timer