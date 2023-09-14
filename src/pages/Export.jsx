export default function Export() {
	function getLocalStorage() {
		Object.entries(localStorage).forEach(([key, value]) => {
			console.log(`${key} => ${value}`);
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
				Click Me!
			</button>
		</>
	);
}
