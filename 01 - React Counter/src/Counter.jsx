import { useState } from "react"

export default function Counter(){
    let[counter,setCounter] = useState(0)


    // Increase value by 1
    function addValue(){
        setCounter((prevCount)=>{
            let result = prevCount + 1
            if(result < 20){
                return result;
            }
            return result = 20 
        })
    }

    // Decrease Value by 1
    function remValue(){
        setCounter((prevCount)=>{
            let result = prevCount - 1
            if(result > 0){
                return result;
            }
            return result = 0 
        })
    }

    return(
        <>
        <h2>Counter : {counter}</h2>
        <button onClick={addValue}>+1</button>
        &nbsp; &nbsp;
        <button onClick={remValue}>-1</button>
        </>
    )
}