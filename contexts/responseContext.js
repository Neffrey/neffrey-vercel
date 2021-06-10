// Framework
import React, { createContext, useState } from 'react'


// Context Object
export const ResponseContext = createContext(false)

// Component Function
export const ResponseProvider = ({ children }) => {

  // Create state
  const [ response, setResponse ] =useState(false)

  const setResponseTrue = () => {
    setResponse(true)
  }

  return (
    <ResponseContext.Provider value={{ response, setResponseTrue }}>
        {children}
    </ResponseContext.Provider>
  )
}