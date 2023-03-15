var arr = [];

const matrixSizeX = 20;
const matrixSizeY = 20;

var cellSize;

if (window.innerHeight > window.innerWidth) {
  cellSize = window.innerWidth / matrixSizeX;
} else {
  cellSize = window.innerHeight / matrixSizeY;
}

//Walls and empty spaces
for (let x = 0; x < matrixSizeX; x++) {
  arr.push([]);
  for (let y = 0; y < matrixSizeY; y++) {
    if (x === 0 || x === matrixSizeX - 1) {
      arr[x].push(2);
    } else if (y === 0 || y === matrixSizeY - 1) {
      arr[x].push(2);
    } else {
      arr[x].push(0);
    }
  }
}

//Pacman
var pacman = { x: 1, y: 1, dir: 3 };

//The direction in which pacman will move. 0 - up, 1 - down, 2 - left, 3 - right.
document.addEventListener("keydown", function (event) {
  if (event.key === "w" || event.key === "W" || event.key === "ArrowUp") {
    pacman.dir = 0;
  }
  if (event.key === "s" || event.key === "S" || event.key === "ArrowDown") {
    pacman.dir = 1;
  }
  if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") {
    pacman.dir = 2;
  }
  if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") {
    pacman.dir = 3;
  }
});

//this will happen every frame
function drawFrame() {
  if (pacman.dir === 0 && arr[pacman.x][pacman.y - 1] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    pacman.y = pacman.y - 1;
  }
  if (pacman.dir === 1 && arr[pacman.x][pacman.y + 1] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    pacman.y = pacman.y + 1;
  }
  if (pacman.dir === 2 && arr[pacman.x - 1][pacman.y] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    pacman.x = pacman.x - 1;
  }
  if (pacman.dir === 3 && arr[pacman.x + 1][pacman.y] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    pacman.x = pacman.x + 1;
  }
  arr[pacman.x][pacman.y] = 1;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] === 0) {
        color = "black";
      }
      if (arr[x][y] === 1) {
        color = "yellow";
      }
      if (arr[x][y] === 2) {
        color = "blue";
      }
      fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
    }
  }
}
