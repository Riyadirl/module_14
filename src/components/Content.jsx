const Content = () => {
  function displayText() {
    var textareaValue = document.getElementById("textarea").value;
    document.getElementById("output").textContent = textareaValue;
  }

  return (
    <div>
      <textarea id="textarea" rows="4" cols="50"></textarea>
      <button onclick="displayText()">Display Text</button>
      <div id="output" class="output"></div>
    </div>
  );
};

export default Content;
