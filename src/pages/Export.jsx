import { useRef, useState } from "react";
import useExport from "../hooks/useExport";

export default function Export() {
  const [userInput, setUserInput] = useState("");
  const linkRef = useRef(null);
  const { exportAll, getLocalStorage, postData } = useExport();

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <h1 className="text-lg bold mb-4">Export Data</h1>

      <section className="text-center space-y-3 max-w-[15rem] mx-auto">
        <div>
          <button
            type="button"
            className="px-3 py-1 w-full rounded shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            onClick={exportAll}
          >
            Export All
          </button>
        </div>

        <div className="flex justify-center ">
          <input
            id="textInput"
            className="px-3 py-1 w-full rounded rounded-r-none shadow active:shadow-blue-600 cursor-pointer"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Ex: 14/09/2023"
            required
          />

          <button
            type="submit"
            className="px-3 py-1 max-w-[100px] w-[100px] rounded rounded-l-none shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            onClick={() => getLocalStorage(userInput)}
          >
            Export
          </button>
        </div>

        <div className="flex justify-center ">
          <input
            ref={linkRef}
            className="px-3 py-1 w-full rounded rounded-r-none shadow active:shadow-blue-600 cursor-pointer"
            placeholder="https://"
            required
          />

          <button
            type="submit"
            className="px-3 py-1 max-w-[100px] w-[100px] rounded rounded-l-none shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            onClick={() => postData(linkRef)}
          >
            Post
          </button>
        </div>
      </section>
    </>
  );
}
