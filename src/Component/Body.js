import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Login'

const Body = () => {
    const Approuter=createBrowserRouter([
        {
            path:"/",
            element:< Login/>,
        },
        
    ])
  return (
    <div>
        <RouterProvider router={Approuter}/>
    </div>
  )
}

export default Body;