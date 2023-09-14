export default function Export() {
	//TODO?
	//Clean up functionality

	function getLocalStorage() {
		//get the data from localstorage
		const data = Object.keys(localStorage);
		// if there is no data, return early
		if (!data) {
			return;
		}
		//data filtered by the key set in env variable
		const matchingKey = data.filter((key) =>
			key.startsWith(import.meta.env.VITE_LS_PREFIX)
		);

		//for each match, get item and create new blob
		matchingKey.forEach((key) => {
			const localStorageData = localStorage.getItem(key);
			const blob = new Blob([localStorageData], {
				type: "application/json",
			});
			const blobURL = URL.createObjectURL(blob);
			const a = document.createElement("a"); //create element to download file
			a.style.display = "none";
			a.href = blobURL;
			a.download = "exported_data.json"; //file name exported as
			document.body.appendChild(a);
			a.click();
			// Clean up
			URL.revokeObjectURL(blobURL);
			document.body.removeChild(a);
		});
	}

	return (
		<>
			<h1 className="text-xl bold">Export Data</h1>
			<button
				type="button"
				className="mt-3 px-3 py-1 rounded shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
				onClick={getLocalStorage}
			>
				Download Data as .JSON file
			</button>
		</>
	);
}
