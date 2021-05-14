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

interface Person {
  id: string
  name: string
  email: string
  age: number
}

export const tableExampleCols: TableColumn<Person>[] = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
]

export const tableExampleData: Person[] = [
  {
    id: '1',
    name: 'Person 1',
    email: 'test@test.com',
    age: 33,
  },
  {
    id: '2',
    name: 'Person 2',
    email: 'x@test.com',
    age: 22,
  },
]

export * from './props'
