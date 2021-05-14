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
  Badge,
  Stat,
  Table,
  Alert,
  Progress,
  Skeleton,
  Spinner,
  Toast,
  Modal,
  Tooltip,
} from './docs'

export const Docs: React.FC = () => {
  return (
    <DocsLayout>
      <Switch>
        {/* Getting Started */}
        <Route path="/docs/getting-started" component={GettingStarted} />
        <Route path="/docs/changelog" component={Changelog} />
        {/* Layout */}
        <Route path="/docs/layout/box" component={Box} />
        <Route path="/docs/layout/container" component={Container} />
        <Route path="/docs/layout/flex" component={Flex} />
        <Route path="/docs/layout/grid" component={Grid} />
        {/* Forms */}
        <Route path="/docs/forms/button" component={Button} />
        <Route path="/docs/forms/checkbox" component={Checkbox} />
        <Route path="/docs/forms/input" component={Input} />
        <Route path="/docs/forms/input-number" component={InputNumber} />
        <Route path="/docs/forms/radio" component={Radio} />
        <Route path="/docs/forms/select" component={Select} />
        <Route path="/docs/forms/switch" component={SwitchDoc} />
        <Route path="/docs/forms/textarea" component={TextArea} />
        {/* Data Display */}
        <Route path="/docs/data-display/badge" component={Badge} />
        <Route path="/docs/data-display/stat" component={Stat} />
        <Route path="/docs/data-display/table" component={Table} />
        {/* Feedback */}
        <Route path="/docs/feedback/alert" component={Alert} />
        <Route path="/docs/feedback/progress" component={Progress} />
        <Route path="/docs/feedback/skeleton" component={Skeleton} />
        <Route path="/docs/feedback/spinner" component={Spinner} />
        <Route path="/docs/feedback/toast" component={Toast} />
        {/* Overlay */}
        <Route path="/docs/overlay/modal" component={Modal} />
        <Route path="/docs/overlay/tooltip" component={Tooltip} />
      </Switch>
    </DocsLayout>
  )
}
