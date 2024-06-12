import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { MovieProvider } from './components/context/movie-context'

const App = () => {
  return (
    <MovieProvider>
      <RouterProvider router={router}/>
    </MovieProvider>
    
  )
}

export default App