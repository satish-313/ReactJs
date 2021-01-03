import React, { useRef } from 'react'
import {useCountRenders} from './useCountRenders'

export const Square = React.memo(({n,increment}) => {
  useCountRenders()
  return <div>
    <button onClick={() =>increment(n)}>{n}</button>
  </div>
})