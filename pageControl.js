var topResult = 0;

topResult = localStorage.getItem('topPacmanResult');

if(topResult === null){
  topResult = 0
}

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

var gameEnd = null

//this is responsible for displaying each frame
setInterval(() => {
  if(gameEnd === null){
  frame++
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  try {
    drawFrame();
  } catch (err) {}
}else{
  let end = document.getElementById('gameEnd')
  end.innerHTML = gameEnd
  end.style.fontSize = `${cellSize*3}px`
  end.style.zIndex = 2123414
  end.style.left = `${cellSize*4.25}px`
  end.style.top = `${cellSize*9.5}px`
}
}, 300);
