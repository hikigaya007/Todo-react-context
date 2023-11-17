import {useContext , createContext} from 'react'

export const TodoContext = createContext({
    todos:[{
        id:1,
        todoMessage:'message comes here',
        isCompleted: false
    }],
    addTodo: (todoMessage) =>{},
    updateTodo:(todoMessage , id) =>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider