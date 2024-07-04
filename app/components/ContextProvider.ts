import React, { useState } from 'react'
'useclient'
import { DataContext } from './context'


const ContextProvider =({children}:{children:React.ReactNode})=> {
    const [todo,setTodo] = useState(Data)
  return (
    <DataContext.Provider value={{todo,setTodo}}>
    {children}
    </DataContext.Provider>
  )
}

export default ContextProvider
