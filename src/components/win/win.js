
import "./win.css"

const Win=()=>{

    const mystyle ={
        width:"250px",
        height:"250px",
    }

    return(
        <div className="win">
            <lord-icon src="https://cdn.lordicon.com/tqywkdcz.json" trigger="loop" colors="primary:#4bb3fd,secondary:#ffc738,tertiary:#a35ac7,quaternary:#f9c9c0" style={mystyle}></lord-icon>
            <h1>Congratulations</h1>
            <h2>You Won</h2>
        </div>
    )

}

export default Win;