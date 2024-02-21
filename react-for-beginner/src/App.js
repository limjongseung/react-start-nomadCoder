import { useEffect, useState } from "react";
function Hello() {
	function byeFn() {
		console.log("bye :(");
	}
	function hiFn() {
		console.log("created :)");
		return byeFn;
	}
	useEffect(hiFn, []);
	return <h1>Hello!</h1>;
}
function App() {
	const [state, setState] = useState(false);
	const onClick = () => setState((prev) => !prev);
	return (
		<div>
			{state ? <Hello /> : null}
			<button onClick={onClick}>{state ? "hide" : "show"}</button>
		</div>
	);
}

export default App;
