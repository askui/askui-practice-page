function allowDrop(elem) {
    elem.preventDefault();
  }
  
  function drag(elem) {
    elem.dataTransfer.setData("text", elem.target.id);
  }
  
  function drop(elem) {
    elem.preventDefault();
    var data = elem.dataTransfer.getData("text");
    elem.target.appendChild(document.getElementById(data));
    const dropHereText = Array.from(elem.target.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
  if (dropHereText && dropHereText.textContent.trim() === "Drop here") {
    dropHereText.parentNode.removeChild(dropHereText);
  }
  }