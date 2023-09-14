import { prefix } from "../utils";
import React, { useState } from "react";

export default function Export() {
	//TODO?
	//Clean up functionality
	//Better date picker? or remove entirely?

	const [userInput, setUserInput] = useState("");

	const handleInputChange = (event) => {
		setUserInput(event.target.value);
	};

	function getLocalStorage() {
		//get the data from localstorage
		const data = Object.keys(localStorage);

		if (!data) {
			return;
		}

		//data filtered by the key set in env variable
		const matchingKeys = data.filter(
			(key) =>
				key === import.meta.env.VITE_LS_PREFIX + userInput.toString()
		);

		if (matchingKeys.length === 0) {
			return console.log("No matching keys.");
		}

		//for each match, get item and create new blob
		matchingKeys.forEach((key) => {
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
			<h3 className="">
				Enter in the date you want to download. Format such as 9/14/2023
			</h3>

			{/* Input field */}
			<input
				type="text"
				id="textInput"
				value={userInput}
				onChange={handleInputChange}
				placeholder="Enter date as m/dd/yyy"
				required
			/>

			<button
				type="submit"
				className="mt-3 px-3 py-1 rounded shadow active:shadow-blue-600 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
				onClick={getLocalStorage}
			>
				Download Data as .JSON file
			</button>
		</>
	);
}
