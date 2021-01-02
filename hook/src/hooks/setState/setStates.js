import React,{useState} from 'react'

import {useForm} from './formhook'

function expensiveInitialState(){
  return 10
}

const SetStates = () => {
  //const[count, setCount] =  useState(() => expensiveInitialState()) // in order to execute only when it called
  const[count, setCount] =  useState(20) 
  const [{inc,inc1}, setInc] = useState({inc:10,inc1:20})
  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [values,handleChange] = useForm({email:"",username:""})

  console.log(values)

  return(
    <div>
      <button onClick={() => setCount(count+1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>

      <hr/>
      <div>count 1: {inc}</div>
      <div>count 2: {inc1}</div>
      <button onClick={() =>
        setInc(currentState => ({...currentState,inc: currentState.inc + 1}) )
      }>click</button>

      <hr/>
      {/* input */}
      <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        {/* above method is very time consuming instace use custom hook */}
      </div>
      <hr/>
      <h1>custom hook</h1>
      <div>
        <input type="email" name="email" values={values.email} onChange={handleChange}/>
        <input type="text" name="username" values={values.email} onChange={handleChange}/>
      </div>
    </div>
  )
}

export default SetStates;