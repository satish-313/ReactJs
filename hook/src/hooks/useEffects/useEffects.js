import React,{useEffect, useState} from 'react'

import {useForm} from '../setState/formhook'
import {Hello} from './Show'
import {useFetch} from './useFetch'

const UseEffects = () => {
  const [values,handleChange] = useForm({email:"",username:"",number:0})
  const [url,setUrl] = useState(`http://numbersapi.com/${values.number}/trivia`)
  // const [show,setShow] = useState(true)
  // useEffect(() => {
  //   console.log("render")
  // },[values.email])

  // useEffect(() => {
  //   console.log("render")

  //   // clean up function
  //   return () => {
  //     console.log("unmount")
  //   }
  // },[values.email])

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e)
  //   }
  //   window.addEventListener("mousemove", onMouseMove)

  //   return() => {
  //     window.addEventListener("mousemove",onMouseMove)
  //   }
  // },[])

  const {data,loading} = useFetch(url)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(`http://numbersapi.com/${values.number}/trivia`)
  }
  
  return(
    <div>
      {/* {show && <Hello/>} */}
      {/* <button onClick={() => setShow(!show)}>click</button> */}
      <hr/>
      <input type="text" name="username" value={values.username} onChange={handleChange}/>
      <input type="text" name="email" value={values.email} onChange={handleChange}/>
      <div>{!data?'loading...':data}</div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="number" value={values.number} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default UseEffects;