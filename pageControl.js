const main = document.getElementById("main");

color = "black";

frame = 0

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

//detect mouse position
document.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function getX(element) {
  return parseInt(element.style.left.slice(0, -2));
}

function getY(element) {
  return parseInt(element.style.top.slice(0, -2));
}

//this is responsible for displaying each frame
setInterval(() => {
  frame++
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  try {
    drawFrame();
  } catch (err) {}
}, 300);
