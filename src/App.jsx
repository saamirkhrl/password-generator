import React, { useState } from "react";

function App() {
  const [len, setLen] = useState();
  const [pass, setPass] = useState("");

  const genPass = (e) => {
    const newLen = e.target.value;
    setLen(newLen);
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const special_characters = "!@#$%^&*()_+=-{}][:?></";
    let password = "";
    for (let char = 0; char < len - 1; char++) {
      const chars = alphabet + numbers + special_characters;
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPass(password);
  };

  const copy = () => {
    const text = document.getElementById("value");
    text.select;
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <h4>Password Generator</h4>
      <label htmlFor="">Password</label>
      <input id="value" value={pass} type="text" readOnly={true} />
      <button onClick={copy}>Copy Password</button>
      <hr />
      <label>Length: {len}</label>
      <input min={3} max={25} onChange={genPass} type="range" placeholder="0" />
    </div>
  );
}

export default App;
