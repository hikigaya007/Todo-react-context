import React, { useState } from 'react'
import { useTodo } from '../context'

function Form() {

  const [todo , setTodo] = useState("")
  const {addTodo} = useTodo();

  const addTodoMessage = (e) =>{
    e.preventDefault()
    
    if(!todo) return 

    addTodo({todo:todo , isCompleted : false})
    setTodo("")
  }

  return (
    <div className='flex justify-center flex-wrap'>
        <input type="text" className='h-10 w-1/3 rounded-2xl text-lg p-1' placeholder='Write Todo...'
        value ={todo}
        onChange={(e) => setTodo(e.target.value)}/>
        <button className='bg-green-700 text-white bottom-2 rounded-2xl w-36 h-10 mx-2 text font-bold' onClick={addTodoMessage}>Add</button>
    </div>
  )
}

export default Form