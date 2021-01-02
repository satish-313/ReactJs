import React, { useState, useRef } from 'react'

import { useForm } from '../setState/formhook'
import {Hello} from './Hell'

const UseRefs = () => {
  const [values,handleChange] = useForm({email:"",username:"",number:0})
  const inputRef = useRef();
  const [show,setShow] = useState(true)

  return (
    <div>
      <input ref={inputRef} type="text" name="username" value={values.username} onChange={handleChange} />
      <input type="text" name="email" value={values.email} onChange={handleChange} />
      <button onClick={() => {
        console.log(inputRef.current)
        inputRef.current.focus()
      }}>focus on</button>
      {show && <Hello/>}
    </div>
  )
}

export default UseRefs;