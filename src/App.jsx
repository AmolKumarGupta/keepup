import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <h1 className='text-red-900'>{ import.meta.env.VITE_APP_NAME }</h1>
      <Outlet />
    </>
  )
}

export default App
