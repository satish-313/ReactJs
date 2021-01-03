import React,{useLayoutEffect,useRef,useState} from 'react'

import {useFetch} from '../useEffects/useFetch'
import Show from './Show'

const UseLayout = () => {
  const [number,setNumber] = useState(13)
  const [rect,setRect] = useState({})
  let url = `http://numbersapi.com/${number}/trivia`
  const {data,loading} = useFetch(url)
  const inputRef = useRef()
  const pref = useRef()

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect())
  // },[])

  useLayoutEffect(() => {
    // console.log(pref.current.getBoundingClientRect())
    setRect(pref.current.getBoundingClientRect())
  },[number])

  return(
    <div>
      <label>input</label>
      <input ref={inputRef} type="text"/>
      <div style={{display:'flex'}}>
        <div ref={pref}>
          {loading ? 'Loading' : <Show  data={data}/>}
        </div>
      </div>
      <div>
        <button onClick={() => setNumber(n => n+1)}>Increment</button>
      </div>
      <div>
        <pre>{JSON.stringify(rect,null,2)}</pre>
      </div>
    </div>
  )
}

export default UseLayout;