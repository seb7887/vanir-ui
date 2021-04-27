import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DocsLayout } from '../layouts'
import { GettingStarted, Box } from './docs'

export const Docs: React.FC = () => {
  return (
    <DocsLayout>
      <Switch>
        <Route path="/docs/getting-started" component={GettingStarted} />
        <Route path="/docs/layout/box" component={Box} />
      </Switch>
    </DocsLayout>
  )
}
