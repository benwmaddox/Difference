function Compare() {
  var text1 = document.getElementsByName("text1")[0].value;
  var text2 = document.getElementsByName("text2")[0].value;
  var diff = Diff.diffWords(text1, text2);

  var resultContainer = document.getElementById("comparisonResult");
  resultContainer.innerHTML = ""; // Clear previous results

  var display = document.createElement("pre");
  diff.forEach(function (part) {
    var node = document.createElement(
      part.added ? "ins" : part.removed ? "del" : "span"
    );
    node.appendChild(document.createTextNode(part.value));
    display.appendChild(node);
  });

  resultContainer.appendChild(display);
  //   resultContainer.appendChild(document.createTextNode(JSON.stringify(diff)));
}
