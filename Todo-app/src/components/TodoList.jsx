import React, { useState } from 'react'
import { useTodo } from '../context';


function TodoList({todo}) {

  const [isTodoEditable, setIsTodoEditable] = useState(false)

  const [todoMessage , setTodoMessage] = useState(todo.todo)

  const {updateTodo , deleteTodo , todos , toggleComplete} = useTodo()

  const editTodo = ()=>{
  updateTodo(todo.id , {...todo, todo: todoMessage})
  setIsTodoEditable(false)

  }

  const toggleCompleted = () =>{
    toggleComplete(todo.id)
  }

  return (
    <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white ${
              todo.isCompleted ? "bg-[#000000]" : "bg-[#8c39cc]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.isCompleted}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-white px-2" : "border-transparent"
              } ${todo.isCompleted ? "line-through" : ""}`}
              value={todoMessage}
              onChange={(e) => setTodoMessage(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.isCompleted) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.isCompleted}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  )
}

export default TodoList