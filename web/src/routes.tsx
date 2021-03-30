import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App } from './App'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  )
}

export { Routes }