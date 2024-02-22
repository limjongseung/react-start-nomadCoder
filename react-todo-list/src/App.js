import { useState } from "react";
function App() {
	const [toDo, setToDo] = useState("");
  const [toDos,setToDos]   = useState([]);
	const onChange = (e) => setToDo(e.target.value);
	const onSubmit = (e) => {
		e.preventDefault();
    if(toDo ===""){
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo,...currentArray])
	};
  console.log(toDos);
	console.log(toDo);
	return (
		<div>
      <h1>My ToDo({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					value={toDo}
					onChange={onChange}
					type="text"
					placeholder="Write your to do..."
				/>
				<button>Add To Do</button>
			</form>
		</div>
	);
}

export default App;
