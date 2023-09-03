import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto pt-2">
        <Outlet />
      </div>
    </>
  );
}

export default App;
