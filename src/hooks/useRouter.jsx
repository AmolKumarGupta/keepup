import { createHashRouter } from "react-router-dom"
import App from '../App'
import Test from '../pages/Test'
import Index from '../pages/Index'

export default function useRouter() {
  return createHashRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: "",
          element: <Index />
        },
        {
          path: "test",
          element: <Test />
        },
      ],
    },
  ])
}