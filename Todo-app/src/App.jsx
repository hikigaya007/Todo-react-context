import React from "react"
import Form from "./components/form"
import TodoList from "./components/TodoList"

function App() {

  return (
    
    <div className="w-full h-full flex-col items-center">
      <Form/>
      <TodoList/>
    </div>
  
  )
}

export default App
