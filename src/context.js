
import React, { useState, useContext } from 'react'
import { useRef} from 'react'

const AppContext = React.createContext()



const AppProvider=({children})=>{

    const [selectedType, setSelectedType] = useState({ allWords: [], typeName: "random" })


    const [lose]=useState(new Audio("../audio/lose2.wav"))
    const [pass]=useState(new Audio("../audio/right.wav"))
    const [win]=useState(new Audio("../audio/win.wav"))


    const ListsTypeOfWords = useRef({

        programming: ["html", "loops", "css", "javascript", "python", "ruby",
          "react", "vue", "compiler", "pointer", "codeforcec",
          "hackerranked", "cybersecurity", "fronend", "backend", "flutter", "bash", "github"]
    
        , sports: ["football", "basket", "scoore", "volleyball",
          "running", "swimming", "weightlifting", "skiing", "climbing",
          "cricket", "tennis", "boxing", "race", "rugby", "golf", "baseball", "badminton", "gymnastics"],
    
        movies: ["bladerunner", "psycho", "dr.strangelove", "superfly",
          "coolhandluke", "scarface", "batman", "love", "superman",
          "spiderman", "idoodIt", "icekings", "icon", "selfie", "7thsecret", "alice", "johnwick", "ali"],
    
        science: ["nano", "books", "electron", "math", "programming", "theory",
          "Medicine", "biology", "geology", "dynamics", "datastructures",
          "algorithm", "algebra", "architectonics", "cryptology", "dermatology", "geometry", "logic"]
      })

    const [numberOfQuestions,setNumberOfQuestions]=useState({lengthQuestions:ListsTypeOfWords.current.sports.length,rightQuestions:0})

    const [currentWord,setCurrentWord]=useState("")
    
    const [wordInTheInput,setWordInTheInput]=useState("")

    const [startGame, setStartGame] = useState(false)


    const CheckTheWord=(startTimer,setChallenge)=>{

        if(currentWord === wordInTheInput){

          pass.play()

          
          setNumberOfQuestions((state)=>({...state,rightQuestions:state.rightQuestions+1}))

          let arr=[...selectedType.allWords]
          let word=arr.splice(Math.random() * (arr.length-1),1)[0]
          setCurrentWord(word)
          setSelectedType((state)=>({...state,allWords:[...arr]}))
          setWordInTheInput("")

          if(numberOfQuestions.rightQuestions === numberOfQuestions.lengthQuestions-1){

            win.play()

            setChallenge("win")

            setTimeout(() => {

              setChallenge(null)
              setWordInTheInput("")
              setStartGame(false)
              setNumberOfQuestions({lengthQuestions:ListsTypeOfWords.current.sports.length,rightQuestions:0})
              setSelectedType({ allWords: [], typeName: selectedType.typeName })
              setCurrentWord("")
              document.querySelector("input").blur()

  
            }, 3000);
          }

          else{
            startTimer()
          }

        }

        else
        {
          lose.play()
          setChallenge("lose")

          setTimeout(() => {

            setChallenge(null)
            setWordInTheInput("")
            setStartGame(false)
            setNumberOfQuestions({lengthQuestions:ListsTypeOfWords.current.sports.length,rightQuestions:0})
            setSelectedType({ allWords: [], typeName: selectedType.typeName })
            setCurrentWord("")
            document.querySelector("input").blur()

          }, 3000);

        }
    }

    const StartApp=()=>{

        let randomArray=[]
        if(selectedType.typeName === "random"){

            let allWord=[...ListsTypeOfWords.current.programming,...ListsTypeOfWords.current.movies
                ,...ListsTypeOfWords.current.sports,...ListsTypeOfWords.current.science]

            allWord = allWord.sort((a, b) => 0.5 - Math.random());

            randomArray=[...allWord.slice(0,18)]

        }
        else{
            randomArray=[...ListsTypeOfWords.current[selectedType.typeName]]
            randomArray = randomArray.sort((a, b) => 0.5 - Math.random());

        }

        let word=randomArray.splice(Math.random() * (numberOfQuestions.lengthQuestions-1),1)[0]

        setCurrentWord(word)
        setSelectedType((state)=>({...state,allWords:[...randomArray]}))
        setStartGame(true)
    }

    return(
        <AppContext.Provider value={{CheckTheWord,StartApp,currentWord, setWordInTheInput,numberOfQuestions,setSelectedType,startGame,selectedType,wordInTheInput}}>{children}</AppContext.Provider>
    )

}


export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }
  