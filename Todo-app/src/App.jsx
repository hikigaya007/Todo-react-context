import React, { useEffect, useState } from "react"
import Form from "./components/form"
import TodoList from "./components/TodoList"
import { TodoProvider } from "./context"

function App() {

  const [todos , setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{
      id:Date.now() ,...todo} , ...prev])
  }

  const updateTodo = (id , todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)))

  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !==id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo, isCompleted: !prevTodo.isCompleted} : prevTodo))
  }

  useEffect (() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  




  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo, toggleComplete}}>
      <div className="w-full h-full">
        <div className="w-full h-full bg-slate-400 flex-col justify-center">
          <Form/>
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
                <TodoList todo={todo}/>

            </div>
          ))}
        </div>
      </div>  
    </TodoProvider>
  
  )
}

export default App
