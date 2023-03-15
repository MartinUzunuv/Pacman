const main = document.getElementById("main");

color = "black";

function fillRect(startX, startY, endX, endY) {
  let newDiv = document.createElement("div");
  main.appendChild(newDiv);
  newDiv.style.position = "absolute";
  newDiv.style.left = `${startX}px`;
  newDiv.style.top = `${startY}px`;
  newDiv.style.width = `${endX}px`;
  newDiv.style.height = `${endY}px`;
  newDiv.style.backgroundColor = color;
  return newDiv;
}

//this is responsible for displaying each frame
setInterval(() => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  try {
    drawFrame();
  } catch (err) {}
}, 50);
