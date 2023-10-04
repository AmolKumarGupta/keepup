import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useAppStore from "./store/appStore";
import Options from "./pages/Options";
import useShortcode from "./hooks/useShortcode";

function App() {
  useShortcode();

  const isOptionPage = useAppStore((s) => s.optionPage);

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-2">
        {isOptionPage ? <Options /> : <Outlet />}
      </div>
    </>
  );
}

export default App;
