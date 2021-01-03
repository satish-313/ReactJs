import React, { useReducer, useState } from 'react'

function reducer(state,action){
  switch(action.type){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

const todoChange = (state,action) => {
  switch(action.type){
    case 'add-todo':
      return {
        todos:[...state.todos, { anything:action.text,status:'inCompleted'}],
        todoCount: state.todoCount + 1
      }
    case 'toggle':
      return {
        todos: state.todos.map((todo,index) => index === action.index ? {...todo,status: todo.status === 'inCompleted'? 'Completed' : 'inCompleted'} : todo),
        todoCount: state.todoCount
      }
    case 'delete':
      return {
        todos: state.todos.filter((todo,index) => index !== action.index),
        todoCount: state.todoCount - 1
      }
    default:
      return state
  }
}

const UseReducers = () => {
  const [count, dispatch] = useReducer(reducer,0)

  const [{todos,todoCount},todoDispatch] = useReducer(todoChange,{todos:[],todoCount:0})
  const [text,setText] = useState("")

  const handleSubmit= (e) =>{
    e.preventDefault()
    todoDispatch({type:'add-todo', text})
    setText('')
  }
  
  return(
    <div>
      <div>count:{count}</div>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      <hr/>
      <div>
        <h3>number of todo:{todoCount}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        {todos.map((todo,index) =>{
          return <div key="index" onClick={() => {
            todoDispatch({type:'toggle', index})
          }}>{todo.anything} and {todo.status} <button onClick={() =>{
            todoDispatch({type:'delete', index})
          }}>delete</button></div>
        })}
      </div>
    </div>
  )
}

export default UseReducers;{}