// Framework
import React, { useContext } from 'react'

// My Components
import { ResponseContext } from '../contexts/responseContext'

// Response
const formResponse = () => {
    
  // Get Context 
  const { response } = useContext(ResponseContext)


    if(response === true ) {
        return( 
            <p>Your message has been sent</p>
        )
    }
    else {
        return( 
            <></>
        )
    }
}
export default formResponse