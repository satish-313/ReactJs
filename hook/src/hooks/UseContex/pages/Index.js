import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export function Index() {
  const {value,setValue} = useContext(UserContext)
  
  return (
    <div>
      <h3>HOM</h3>
      <p>{value}</p>
      <button onClick={() => setValue('change')}>change value to working</button>
    </div>
  )
}