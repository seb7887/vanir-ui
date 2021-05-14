import { TableColumn } from 'vanir-ui'

export interface Props {
  name: string
  type: string
  description: string
  default: string
}

export const columns: TableColumn<Props>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Default',
    accessor: 'default',
  },
]

export const options = [
  {
    label: 'One',
    value: 'one',
  },
  {
    label: 'Two',
    value: 'two',
  },
  {
    label: 'Three',
    value: 'three',
  },
]

export * from './props'
