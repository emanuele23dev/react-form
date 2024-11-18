import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppHeader />
    </>
  );
}

export default App;
