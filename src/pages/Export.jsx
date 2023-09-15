import { useState } from "react";

export default function Export() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  function exportAll() {
    const data = Object.keys(localStorage);

    if (!data) {
      return alert("No data found!");
    }

    const matchingKeys = data.filter((key) =>
      key.startsWith(import.meta.env.VITE_LS_PREFIX)
    );

    if (matchingKeys.length === 0) {
      return alert("No data found!");
    }

    let filteredData = {};

    matchingKeys.forEach((key) => {
      filteredData[key] = JSON.parse(localStorage.getItem(key));
    });
    download([JSON.stringify(filteredData)]);
  }

  function getLocalStorage() {
    const data = Object.keys(localStorage);

    if (!data) {
      return;
    }

    const matchingKeys = data.filter(
      (key) => key === import.meta.env.VITE_LS_PREFIX + userInput.toString()
    );

    if (matchingKeys.length === 0) {
      return alert("No matching keys.");
    }

    matchingKeys.forEach((key) => {
      const data = localStorage.getItem(key);
      download([data], key);
    });
  }

  function download(data, label = "") {
    const blob = new Blob(data, { type: "text/plain" });
    const blobURL = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = blobURL;
    a.download = label ? `keepup-${label}.json` : `keepup.json`;
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(blobURL);
    document.body.removeChild(a);
  }

  return (
    <>
      <h1 className="text-lg bold mb-4">Export Data</h1>

      <section className="text-center space-y-3">
        <div>
          <button
            type="button"
            className="px-3 py-1 min-w-[160px] rounded shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            onClick={exportAll}
          >
            Export All
          </button>
        </div>

        <div className="flex justify-center ">
          <input
            id="textInput"
            className="px-3 py-1 max-w-[160px] rounded rounded-r-none shadow active:shadow-blue-600 cursor-pointer"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Ex: 14/09/2023"
            required
          />

          <button
            type="submit"
            className="px-3 py-1 rounded rounded-l-none shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            onClick={getLocalStorage}
          >
            Export
          </button>
        </div>
      </section>
    </>
  );
}
