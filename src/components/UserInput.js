import React, { useState } from "react";

function UserInput(props) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Type your todo tasks 😃"
        className={`form-control mt-3`}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
}

export default UserInput;
