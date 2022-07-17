import { useEffect } from "react";
import "./App.css";
import { getAll } from "./api/exercises";

function App() {
  useEffect(() => {
    getAll().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;
