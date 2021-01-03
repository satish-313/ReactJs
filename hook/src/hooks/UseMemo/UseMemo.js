import React, { useCallback, useMemo, useState } from 'react'

import { useFetch } from './UseFetch'

const UseMemo = () => {
  const [count, setCount] = useState(0)
  const { data } = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json")

  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return []
    }

    console.log('computing longest word')

    let longestWord = ''

    JSON.parse(arr).forEach(sentence =>
      sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word
        }
      }))

    return longestWord
  },[])

  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])

  return (
    <div>
      <div>
        count:{count}
      </div>
      <button onClick={() => setCount(n => n + 1)}>Increments</button>
      <div>
        {longestWord}
      </div>
    </div>
  )
}

export default UseMemo;