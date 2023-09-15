import { useState } from "react";

export default function Export() {
  /**
   * TODO:
   * Clean up functionality,
   * Better date picker? or remove entirely?
   */

  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

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
      const localStorageData = localStorage.getItem(key);
      const blob = new Blob([localStorageData], {
        type: "application/json",
      });
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobURL;
      a.download = "keepup.json";
      document.body.appendChild(a);
      a.click();

      URL.revokeObjectURL(blobURL);
      document.body.removeChild(a);
    });
  }

  return (
    <>
      <h1 className="text-lg bold mb-4">Export Data</h1>

      <section className="text-center">
        <div className="flex justify-center ">
          <input
            type="text"
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
