import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box, Grid, GridProps, GridItem, GridItemProps } from '../src'

const templateColumns = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  'none',
]
const templateRows = ['1', '2', '3', '4', '5', '6', 'none']
const gap = [
  'px',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  ' 44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
]
const flow = ['row', 'column', 'row-dense', 'column-dense']
const auto = ['auto', 'min', 'max', 'fr']

const meta: Meta = {
  title: 'Grid',
  component: Grid,
  argTypes: {
    cols: {
      control: {
        type: 'select',
        options: templateColumns,
      },
    },
    rows: {
      control: {
        type: 'select',
        options: templateRows,
      },
    },
    gap: {
      control: {
        type: 'select',
        options: gap,
      },
    },
    columnGap: {
      control: {
        type: 'select',
        options: gap,
      },
    },
    rowGap: {
      control: {
        type: 'select',
        options: gap,
      },
    },
    autoFlow: {
      control: {
        type: 'select',
        options: flow,
      },
    },
    autoCol: {
      control: {
        type: 'select',
        options: auto,
      },
    },
    autoRow: {
      control: {
        type: 'select',
        options: auto,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<GridProps> = args => (
  <Grid {...args}>
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
    <Box className="bg-red-500 w-4 h-4" />
  </Grid>
)

const GridItemTemplate: Story<GridItemProps> = args => (
  <Grid cols="5" gap="4">
    <GridItem colSpan="2" className="w-6 h-8 bg-red-500" />
    <GridItem colStart="4" colEnd="6" className="w-6 h-8 bg-red-600" />
  </Grid>
)

export const DefaultGrid = Template.bind({})
export const WithGridItem = GridItemTemplate.bind({})
