import { Link } from "react-router-dom";
import useAppStore from "../store/appStore";

function Options() {
	const toggleOptionPage = useAppStore((s) => s.toggleOptionPage);
	const pages = {
		home: "/",
		my_test: "test",
		export: "export",
	};

	return (
		<div
			onClick={toggleOptionPage}
			className="my-12 space-y-3 text-xl text-center capitalize pointer"
		>
			{Object.entries(pages).map(([name, link]) => {
				return (
					<div key={name} className="hover:text-gray-500">
						<Link to={link} reloadDocument={true}>
							{name.replace("_", " ")}
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default Options;
