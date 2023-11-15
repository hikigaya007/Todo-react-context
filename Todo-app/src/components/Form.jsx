import React from 'react'

function Form() {
  return (
    <div>
        <input type="text" placeholder='Write Todo...' />
        <button className='bg-green-700 text-white bottom-2 rounded-2xl w-12'>Add</button>
    </div>
  )
}

export default Form