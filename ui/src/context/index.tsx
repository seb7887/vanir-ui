import React, { useContext, useMemo, useReducer } from 'react'

interface VanirUIState {
  displayModal: boolean
  displayToast: boolean
}

const initialState: VanirUIState = {
  displayModal: false,
  displayToast: false,
}

type VanirUIAction =
  | {
      type: 'OPEN_MODAL'
    }
  | {
      type: 'CLOSE_MODAL'
    }
  | {
      type: 'SHOW_TOAST'
    }
  | {
      type: 'HIDE_TOAST'
    }

interface Context {
  state: VanirUIState
  dispatch: React.Dispatch<VanirUIAction>
}

const VanirUIContext = React.createContext<Context | null>(null)

const vanirUIReducer = (state: VanirUIState, action: VanirUIAction) => {
  console.log('action', action)
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        displayModal: true,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        displayModal: false,
      }
    case 'SHOW_TOAST':
      return {
        ...state,
        displayToast: true,
      }
    case 'HIDE_TOAST':
      return {
        ...state,
        displayToast: false,
      }
  }
}

export const VanirUIProvider: React.FC = props => {
  const [state, dispatch] = useReducer(vanirUIReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])

  return <VanirUIContext.Provider value={value} {...props} />
}

export const useModal = () => {
  const context = useContext(VanirUIContext)
  if (!context) {
    throw new Error('useModal must be used within a VanirUIProvider')
  }
  const {
    state: { displayModal },
    dispatch,
  } = context

  const openModal = () => dispatch({ type: 'OPEN_MODAL' })
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })

  return {
    displayModal,
    openModal,
    closeModal,
  }
}

export const useToast = () => {
  const context = useContext(VanirUIContext)
  if (!context) {
    throw new Error('useToast must be used within a VanirUIProvider')
  }
  const {
    state: { displayToast },
    dispatch,
  } = context

  const showToast = (duration: number, callback: Function) => {
    dispatch({ type: 'SHOW_TOAST' })
    setTimeout(() => {
      dispatch({ type: 'HIDE_TOAST' })
      callback()
    }, duration)
  }

  return {
    displayToast,
    showToast,
  }
}
