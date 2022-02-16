import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "✍️Todo App";
  }, []);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
