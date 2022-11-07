import { createContext } from 'react'
import { useState, useEffect } from 'react'

const EcomContext = createContext()

const EcomProvider = ({ children }) => {
  return <EcomContext.Provider value={{}}>{children}</EcomContext.Provider>
}

export { EcomProvider }
export default EcomContext
