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
    <div className='flex justify-center ' style={{width:'100%'}}>
        <input type="text" className='h-10 w-5/12 rounded-2xl text-lg p-3' placeholder='Write Todo...'
        value ={todo}
        onChange={(e) => setTodo(e.target.value)}/>
        <button className='bg-green-600 text-white hover:scale-105 transition-all duration-200 bottom-2 rounded-2xl w-36 h-10 mx-2 text font-bold' onClick={addTodoMessage}>Add</button>
    </div>
  )
}

export default Form