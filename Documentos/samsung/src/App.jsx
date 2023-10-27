import { useState } from "react";
import "./App.css";
import { LoadingBar } from "./screens";
import { Main } from "./screens";
import { Navbar } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Navbar />
      {loading ? <LoadingBar setLoading={setLoading} /> : <Main />}
    </div>
  );
}

export default App;
