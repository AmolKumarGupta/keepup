import { Outlet } from "react-router-dom"
import Index from './pages/Index'

function App() {
  return (
    <>
      <h1 className='text-red-900'>Vite + React</h1>
      <Outlet />
    </>
  )
}

export default App
