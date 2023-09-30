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

  function getData() {
    const data = Object.keys(localStorage);
    if (!data) {
      return [];
    }

    const matchingKeys = data.filter((key) =>
      key.startsWith(import.meta.env.VITE_LS_PREFIX)
    );

    if (matchingKeys.length === 0) {
      return [];
    }

    let filteredData = {};
    matchingKeys.forEach((key) => {
      filteredData[key] = JSON.parse(localStorage.getItem(key));
    });

    return filteredData;
  }

  function postData(url, data) {
    // check url is valid or not
    try {
      new URL(url);
    } catch (err) {
      return false;
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return { exportAll, getLocalStorage, download, postData, getData };
}
