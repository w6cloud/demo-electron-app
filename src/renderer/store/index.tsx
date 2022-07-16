import { useContext, createContext, useState } from 'react'

export interface WindowStore {
  about: {
    isOpen: boolean
    setAboutWindowState: (value: boolean) => void
  },
  app: {
    isOpen: boolean
    setAppWindowState: (value: boolean) => void
  }
}

const WindowStoreContext = createContext({} as WindowStore)

export function useWindowStore() {
  return useContext(WindowStoreContext)
}

export function WindowStoreProvider({ children }) {
  const [state, setState] = useState({
    about: { isOpen: false, setAboutWindowState },
    app: { isOpen: false, setAppWindowState },
  })

  function setAboutWindowState(value: boolean) {
    setState((state) => ({
      ...state,
      about: {
        ...state.about,
        isOpen: value,
      },
    }))
  }

  function setAppWindowState(value: boolean) {
    setState((state) => ({
      ...state,
      app: {
        ...state.app,
        isOpen: value,
      },
    }))
  }

  return (
    <WindowStoreContext.Provider value={state}>
      {children}
    </WindowStoreContext.Provider>
  )
}
