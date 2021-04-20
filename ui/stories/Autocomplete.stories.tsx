import React, { useState, useCallback } from 'react'
import { Meta, Story } from '@storybook/react'
import { Autocomplete, AutocompleteProps } from '../src'

const sizes = ['xs', 'sm', 'md', 'lg']

const meta: Meta = {
  title: 'Autocomplete',
  component: Autocomplete,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizes,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const options = [
  {
    label: 'Alfa',
    value: 'alpha',
  },
  {
    label: 'Beta',
    value: 'beta',
  },
  {
    label: 'Gamma',
    value: 'gamma',
  },
]

const Template: Story<AutocompleteProps> = args => {
  const [state, setState] = useState(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const suggestions =
      value !== '' ? options.filter(o => o.value.includes(value)) : []
    setState(suggestions)
  }, [])

  return (
    <Autocomplete
      options={state}
      onChange={handleChange}
      placeholder="Search"
      {...args}
    />
  )
}

export const Default = Template.bind({})
