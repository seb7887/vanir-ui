import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DocsLayout } from '../layouts'
import { GettingStarted, Changelog, Box, Container, Flex, Grid } from './docs'

export const Docs: React.FC = () => {
  return (
    <DocsLayout>
      <Switch>
        <Route path="/docs/getting-started" component={GettingStarted} />
        <Route path="/docs/changelog" component={Changelog} />
        <Route path="/docs/layout/box" component={Box} />
        <Route path="/docs/layout/container" component={Container} />
        <Route path="/docs/layout/flex" component={Flex} />
        <Route path="/docs/layout/grid" component={Grid} />
      </Switch>
    </DocsLayout>
  )
}
