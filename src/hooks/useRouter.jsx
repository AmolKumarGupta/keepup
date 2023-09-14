import { createHashRouter } from "react-router-dom";
import App from "../App";
import Test from "../pages/Test";
import Index from "../pages/Index";
import Export from "../pages/Export";

/**
 * setup routes and layout.
 * by logic, it is not a actual react hook
 *
 * @returns Router
 */
export default function useRouter() {
  return createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Index />,
        },
        {
          path: "test",
          element: <Test />,
        },
        {
          path: "export",
          element: <Export />,
        },
      ],
    },
  ]);
}
