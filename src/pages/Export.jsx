export default function Export() {
	function getLocalStorage() {
		Object.entries(localStorage).forEach(([key, value]) => {
			console.log(`${key} => ${value}`);
		});
	}

	return (
		<>
			<h1 className="text-xl bold">Export Data</h1>
			<button type="button" onClick={getLocalStorage}>
				Click Me!
			</button>
		</>
	);
}
