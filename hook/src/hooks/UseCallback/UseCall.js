import React, { useCallback, useState } from 'react'

import {Hello} from './Hello'
import {Square} from './Square'

const UseCall = () => {
  const [count,setCount] = useState(0)
  const favoriteNums = [1,2,3,4,5,7]

  const increment = useCallback((n) =>{
    setCount(c => c+n)
  },[setCount])

  return(
    <div>
      {/* <Hello increment={() => setCount(count+1)}/> */}
      <Hello increment={increment}/>
      <div>
        {count}
      </div>
      <div style={{display:'flex'}}>
        {favoriteNums.map((n,index) => {
          return <Square increment={increment} n={n} key={index}/>
        })}
      </div>
    </div>
  )
}

export default UseCall