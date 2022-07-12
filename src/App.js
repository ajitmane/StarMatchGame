import logo from "./logo.svg";
import "./App.css";
import StarMatch from "./components/StarMatch";
import { useState } from "react";

function App() {
  const [gameId, setGameId] = useState(1);
  const resetgame = () => {
    setGameId(gameId + 1);
  };
  return (
    <div className="App">
      <StarMatch key={gameId} resetgame={resetgame} />
    </div>
  );
}

export default App;
