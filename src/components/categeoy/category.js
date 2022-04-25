import {useGlobalContext} from "../../context"
import "./category.css"


const wordCategory = ["random", "programming", "sports", "movies", "science"]


const Category=()=>{

    const {setSelectedType,selectedType,startGame}=useGlobalContext()
    
    return(
        <div className={`category${ startGame ? " disable" : "" }`}>
            {wordCategory.map((name,idx)=>{
                const modifyName=name.replace(name[0],name[0].toUpperCase())
                return(
                    <div key={idx}  className={(selectedType.typeName === name) ? "active" :"" } onClick={()=>setSelectedType((state)=>({...state,typeName:name}))}> {modifyName} </div>
                )

            })}
        </div>

    )
    
}

export default Category

