import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './layouts'
import { Home, Docs } from './pages'

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Docs} path="/docs" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
