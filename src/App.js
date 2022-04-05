import { useState } from "react";

function App() {
  const [message, setMessage] = useState(
    "JS is the best lanaguage"
  );

  
function handleClick() {
  setMessage("New message")
}

  return (
  <div>
    <h1>{message}</h1>
    <button onClick={handleClick}>Update the message</button>
  </div>
  );
}

export default App;
