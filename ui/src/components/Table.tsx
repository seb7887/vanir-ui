import React, { useCallback, ThHTMLAttributes, useMemo, useEffect } from 'react'
import clsx from 'clsx'
import {
  Column,
  TableOptions,
  useTable,
  usePagination,
  useSortBy,
  SortingRule,
} from 'react-table'
import { Flex } from './Flex'

export type TableColumn<T extends Record<string, any>> = Column<T>
export type SortType = 'asc' | 'desc'

export interface SortBy {
  column: string
  order: SortType | null
}

interface PaginationProps {
  pageCount: number
  pageIndex: number
  canPreviousPage: boolean
  canNextPage: boolean
  onChangePage: (p: number, execute: boolean) => void
}

export interface TableProps<T extends Record<string, any>>
  extends TableOptions<T> {
  columns: TableColumn<T>[]
  data: T[]
  pageNumber?: number
  rowsPerPage?: number
  totalOfPages?: number
  initialSortBy?: SortingRule<T>[]
  onRowClick?: (item: T, row: number) => void | Promise<void>
  onChangePage?: (p: number) => void | Promise<void>
  onSort?: (sortBy: SortingRule<T>[]) => void | Promise<void>
  className?: string
  trClassName?: string
  thClassName?: string
  tdClassName?: string
  rowClassName?: string
  PaginationComponent?: React.FC<PaginationProps>
}

const Thead: React.FC<React.ThHTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  ...props
}) => {
  return <thead {...props}>{children}</thead>
}

const Tbody: React.FC<ThHTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  ...props
}) => {
  return <tbody {...props}>{children}</tbody>
}

const Tr: React.FC<React.ThHTMLAttributes<HTMLTableRowElement>> = ({
  children,
  ...props
}) => {
  return <tr {...props}>{children}</tr>
}

const Th: React.FC<React.ThHTMLAttributes<HTMLTableHeaderCellElement>> = ({
  children,
  ...props
}) => {
  return <th {...props}>{children}</th>
}

const Td: React.FC<React.ThHTMLAttributes<HTMLTableHeaderCellElement>> = ({
  children,
  ...props
}) => {
  return <td {...props}>{children}</td>
}

const HiArrowDown: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
)

const HiArrowUp: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
)

const baseClasses = 'table-auto'
const tdBaseClasses = 'p-2'
const trBaseClasses =
  'border-b-2 border-gray-300 text-left uppercase text-gray-500'
const thBaseClasses = 'px-2 py-1 hover:text-gray-600 transition duration-300'
const rowBaseClasses = 'border-b border-gray-300 text-left'

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  onRowClick,
  onChangePage,
  onSort,
  rowsPerPage = 6,
  pageNumber = 1,
  totalOfPages = data.length,
  disableSortBy,
  initialSortBy = [],
  className,
  tdClassName,
  thClassName,
  trClassName,
  rowClassName,
  PaginationComponent,
}: TableProps<T>) => {
  const memoizedSortBy = useMemo(() => initialSortBy, [initialSortBy])
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    pageCount,
    state: { pageIndex, sortBy },
    canPreviousPage,
    canNextPage,
  } = useTable<T>(
    {
      columns,
      data,
      manualSortBy: true,
      disableSortBy,
      manualPagination: true,
      pageCount: Math.ceil(Math.abs(totalOfPages / rowsPerPage - 1)) + 1,
      initialState: {
        sortBy: memoizedSortBy,
      },
      useControlledState: state => {
        return useMemo(
          () => ({
            ...state,
            pageIndex: pageNumber,
            pageSize: rowsPerPage,
          }),
          [state, pageNumber, rowsPerPage]
        )
      },
    },
    useSortBy,
    usePagination
  )
  const classes = clsx([baseClasses, className])
  const thClasses = clsx([thBaseClasses, thClassName])
  const trClasses = clsx([trBaseClasses, trClassName])
  const tdClasses = clsx([
    tdBaseClasses,
    tdClassName,
    onRowClick && 'hover:cursor-pointer',
  ])
  const rowClasses = clsx([rowBaseClasses, rowClassName])

  const handleRowClick = useCallback(
    (value: T, index: number) => {
      if (onRowClick) {
        onRowClick(value, index)
      }
    },
    [onRowClick]
  )

  const handleChangePage = useCallback(
    (page: number, canExecute: boolean) => {
      if (canExecute && onChangePage) {
        onChangePage(page)
      }
    },
    [onChangePage]
  )

  useEffect(() => {
    if (onSort) {
      onSort(sortBy)
    }
  }, [sortBy, onSort])

  return (
    <Flex direction="column">
      <table {...getTableProps()} className={classes}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()} className={trClasses}>
              {headerGroup.headers.map(column => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={thClasses}
                >
                  <Flex align="center" justify="between">
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <HiArrowDown />
                      ) : (
                        <HiArrowUp />
                      )
                    ) : (
                      ''
                    )}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            const rowProps = row.getRowProps()
            return (
              <Tr
                {...rowProps}
                key={rowProps.key}
                onClick={() => handleRowClick(row.original, i)}
                className={rowClasses}
                data-testid="row"
              >
                {row.cells.map(cell => (
                  <Td {...cell.getCellProps()} className={tdClasses}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </table>
      {PaginationComponent ? (
        <PaginationComponent
          pageCount={pageCount}
          pageIndex={pageIndex}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          onChangePage={handleChangePage}
        />
      ) : null}
    </Flex>
  )
}
