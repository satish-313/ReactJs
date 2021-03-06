import React, { useMemo, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { About } from './pages/about'
import { Index } from './pages/Index'
import { UserContext } from './UserContext'

const UseContext = () => {
  const [value,setValue] = useState(null)

  const providerValue = useMemo(() => ({ value,setValue}),[value,setValue])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  )
}

export default UseContext;