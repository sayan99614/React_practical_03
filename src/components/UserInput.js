import React, { useState } from "react";

function UserInput({ data, setData }) {
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const storeInput = (event) => {
    if (event.key === "Enter") {
      if (input === "") {
        alert("You should enter some value");
        return;
      }
      const tmpdata = {
        data: input,
        date: new Date().toLocaleDateString(),
      };
      setData([...data, tmpdata]);
      setInput("");
    }
    return;
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type your todo tasks 😃"
        className={`form-control mt-3 w-75 mx-auto`}
        value={input}
        onChange={handleInput}
        onKeyPress={storeInput}
      />
    </div>
  );
}

export default UserInput;
