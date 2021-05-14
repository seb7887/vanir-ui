import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DocsLayout } from '../layouts'
import {
  GettingStarted,
  Changelog,
  Box,
  Container,
  Flex,
  Grid,
  Button,
  Checkbox,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch as SwitchDoc,
  TextArea,
} from './docs'

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
        <Route path="/docs/forms/button" component={Button} />
        <Route path="/docs/forms/checkbox" component={Checkbox} />
        <Route path="/docs/forms/input" component={Input} />
        <Route path="/docs/forms/input-number" component={InputNumber} />
        <Route path="/docs/forms/radio" component={Radio} />
        <Route path="/docs/forms/select" component={Select} />
        <Route path="/docs/forms/switch" component={SwitchDoc} />
        <Route path="/docs/forms/textarea" component={TextArea} />
      </Switch>
    </DocsLayout>
  )
}
