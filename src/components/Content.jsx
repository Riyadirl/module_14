import React, { useState } from "react";

const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const input = () => {
    const textareaValue = document.getElementById("textarea").value;
    setDisplayText(textareaValue);
  };

  return (
    <div>
      <textarea id="textarea" rows="4" cols="50" />
      <button onClick={input}>Show Text</button>
      {displayText && <p>{displayText}</p>}
    </div>
  );
};

export default Content;
