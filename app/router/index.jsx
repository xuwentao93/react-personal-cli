import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Route component={Hello} path="/" />
    </Router>
  )
}

function Hello() {
  return (
    <div>hello world!</div>
  )
}
