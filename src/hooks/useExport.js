export default function useExport() {
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

  function getLocalStorage(userInput) {
    if (!userInput) {
      return alert("It is empty");
    }

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

  function postData(linkRef) {
    if (!linkRef || !linkRef.current) {
      return;
    }

    if (!linkRef.current.value) {
      return alert("Url is Empty!");
    }
  }

  return { exportAll, getLocalStorage, download, postData };
}
