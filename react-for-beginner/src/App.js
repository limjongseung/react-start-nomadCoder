import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = ()=>setValue((prev)=>prev +1)
  console.log("i run all the time");
  const iRunOnlyOnce = ()=>{
    console.log('i run only once');
  }
  useEffect(iRunOnlyOnce,[]);
  return (
    <div>
      <h1 className={styles.title}>welcome</h1>
      <button onClick={onClick}>click me</button>
      <div>{counter}</div>
    </div>
  );
}

export default App;
