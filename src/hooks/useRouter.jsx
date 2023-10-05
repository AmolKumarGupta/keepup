import { createHashRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";
import Export from "../pages/Export";
import Calender from "../components/Calender";
import Shortcuts from "../pages/Shortcuts";

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
          element: <Calender date={new Date()} onBack={() => {}} />,
        },
        {
          path: "export",
          element: <Export />,
        },
        {
          path: "shortcuts",
          element: <Shortcuts />,
        },
      ],
    },
  ]);
}
