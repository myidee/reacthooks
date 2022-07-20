import React, { useState } from "react";

function App3() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{score}</h1>
        <button onClick={() => setScore(score + 1)}>
          Increase Score
          {/* // update the score state Increase score */}
        </button>
      </header>
    </div>
  );
}

export default App3;
