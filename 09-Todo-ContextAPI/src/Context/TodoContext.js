import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo Msg",
            complete:false,
        }
    ],
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    addTodo:(todo)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider = TodoContext.Provider 

export function useTodo(){
    return useContext(TodoContext)
}