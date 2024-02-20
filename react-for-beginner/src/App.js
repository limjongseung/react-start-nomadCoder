import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);
	console.log("i run all the time");
	const iRunOnlyOnce = () => {
		console.log('i run when "counter" changed');
	};
	useEffect(iRunOnlyOnce, [counter]);
	useEffect(() => {
		console.log('i run when "keyword" changed');
	}, [keyword]);
	return (
		<div>
			<input
				type="text"
				placeholder="Search here"
				value={keyword}
				onChange={onChange}
			/>
			<h1 className={styles.title}>welcome</h1>
			<button onClick={onClick}>click me</button>
			<div>{counter}</div>
		</div>
	);
}

export default App;
