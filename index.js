var arr = [];

const matrixSizeX = 28;
const matrixSizeY = 31;

var cellSize;

var score = 0;

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
      arr[x].push(4);
    }
  }
}

//all walls
{
  arr[0][0] = 2;
  arr[1][0] = 2;
  arr[2][0] = 2;
  arr[3][0] = 2;
  arr[4][0] = 2;
  arr[5][0] = 2;
  arr[6][0] = 2;
  arr[7][0] = 2;
  arr[8][0] = 2;
  arr[9][0] = 2;
  arr[10][0] = 2;
  arr[11][0] = 2;
  arr[12][0] = 2;
  arr[13][0] = 2;
  arr[14][0] = 2;
  arr[15][0] = 2;
  arr[16][0] = 2;
  arr[17][0] = 2;
  arr[18][0] = 2;
  arr[19][0] = 2;
  arr[20][0] = 2;
  arr[21][0] = 2;
  arr[22][0] = 2;
  arr[23][0] = 2;
  arr[24][0] = 2;
  arr[25][0] = 2;
  arr[26][0] = 2;
  arr[27][0] = 2;
  arr[27][1] = 2;
  arr[27][2] = 2;
  arr[27][3] = 2;
  arr[27][4] = 2;
  arr[27][5] = 2;
  arr[27][6] = 2;
  arr[27][7] = 2;
  arr[27][8] = 2;
  arr[27][9] = 2;
  arr[26][9] = 2;
  arr[25][9] = 2;
  arr[24][9] = 2;
  arr[23][9] = 2;
  arr[22][9] = 2;
  arr[22][10] = 2;
  arr[22][11] = 2;
  arr[22][12] = 2;
  arr[22][13] = 2;
  arr[23][13] = 2;
  arr[24][13] = 2;
  arr[25][13] = 2;
  arr[26][13] = 2;
  arr[27][13] = 2;
  arr[27][15] = 2;
  arr[26][15] = 2;
  arr[25][15] = 2;
  arr[24][15] = 2;
  arr[23][15] = 2;
  arr[22][15] = 2;
  arr[22][16] = 2;
  arr[22][17] = 2;
  arr[22][18] = 2;
  arr[22][19] = 2;
  arr[23][19] = 2;
  arr[24][19] = 2;
  arr[25][19] = 2;
  arr[26][19] = 2;
  arr[27][19] = 2;
  arr[27][20] = 2;
  arr[27][21] = 2;
  arr[27][22] = 2;
  arr[27][23] = 2;
  arr[27][24] = 2;
  arr[26][24] = 2;
  arr[25][24] = 2;
  arr[25][25] = 2;
  arr[26][25] = 2;
  arr[27][25] = 2;
  arr[27][26] = 2;
  arr[27][27] = 2;
  arr[27][28] = 2;
  arr[27][29] = 2;
  arr[27][30] = 2;
  arr[26][30] = 2;
  arr[25][30] = 2;
  arr[24][30] = 2;
  arr[23][30] = 2;
  arr[22][30] = 2;
  arr[21][30] = 2;
  arr[20][30] = 2;
  arr[19][30] = 2;
  arr[18][30] = 2;
  arr[17][30] = 2;
  arr[16][30] = 2;
  arr[15][30] = 2;
  arr[14][30] = 2;
  arr[13][30] = 2;
  arr[12][30] = 2;
  arr[11][30] = 2;
  arr[10][30] = 2;
  arr[9][30] = 2;
  arr[8][30] = 2;
  arr[7][30] = 2;
  arr[6][30] = 2;
  arr[5][30] = 2;
  arr[4][30] = 2;
  arr[3][30] = 2;
  arr[2][30] = 2;
  arr[1][30] = 2;
  arr[0][30] = 2;
  arr[0][29] = 2;
  arr[0][28] = 2;
  arr[0][27] = 2;
  arr[0][26] = 2;
  arr[0][25] = 2;
  arr[0][24] = 2;
  arr[1][24] = 2;
  arr[1][25] = 2;
  arr[2][25] = 2;
  arr[2][24] = 2;
  arr[0][23] = 2;
  arr[0][22] = 2;
  arr[0][21] = 2;
  arr[0][20] = 2;
  arr[0][19] = 2;
  arr[0][18] = 2;
  arr[0][17] = 2;
  arr[0][16] = 2;
  arr[0][15] = 2;
  arr[1][15] = 2;
  arr[2][15] = 2;
  arr[3][15] = 2;
  arr[4][15] = 2;
  arr[5][15] = 2;
  arr[5][16] = 2;
  arr[5][17] = 2;
  arr[5][18] = 2;
  arr[5][19] = 2;
  arr[4][19] = 2;
  arr[3][19] = 2;
  arr[2][19] = 2;
  arr[1][19] = 2;
  arr[1][18] = 2;
  arr[2][18] = 2;
  arr[3][18] = 2;
  arr[4][18] = 2;
  arr[4][17] = 2;
  arr[4][16] = 2;
  arr[3][16] = 2;
  arr[2][16] = 2;
  arr[1][16] = 2;
  arr[1][17] = 2;
  arr[2][17] = 2;
  arr[3][17] = 2;
  arr[0][12] = 2;
  arr[0][13] = 2;
  arr[1][13] = 2;
  arr[1][12] = 2;
  arr[2][12] = 2;
  arr[2][13] = 2;
  arr[3][13] = 2;
  arr[3][12] = 2;
  arr[4][12] = 2;
  arr[4][13] = 2;
  arr[5][13] = 2;
  arr[5][12] = 2;
  arr[5][11] = 2;
  arr[5][10] = 2;
  arr[5][9] = 2;
  arr[4][9] = 2;
  arr[3][9] = 2;
  arr[2][9] = 2;
  arr[1][9] = 2;
  arr[0][9] = 2;
  arr[0][10] = 2;
  arr[0][11] = 2;
  arr[1][11] = 2;
  arr[1][10] = 2;
  arr[2][10] = 2;
  arr[2][11] = 2;
  arr[3][11] = 2;
  arr[3][10] = 2;
  arr[4][10] = 2;
  arr[4][11] = 2;
  arr[0][8] = 2;
  arr[0][7] = 2;
  arr[0][6] = 2;
  arr[0][5] = 2;
  arr[0][4] = 2;
  arr[0][3] = 2;
  arr[0][2] = 2;
  arr[0][1] = 2;
  arr[23][11] = 2;
  arr[23][12] = 2;
  arr[24][12] = 2;
  arr[24][11] = 2;
  arr[25][11] = 2;
  arr[26][11] = 2;
  arr[26][12] = 2;
  arr[25][12] = 2;
  arr[27][12] = 2;
  arr[27][11] = 2;
  arr[27][10] = 2;
  arr[26][10] = 2;
  arr[25][10] = 2;
  arr[24][10] = 2;
  arr[23][10] = 2;
  arr[23][16] = 2;
  arr[23][17] = 2;
  arr[23][18] = 2;
  arr[24][18] = 2;
  arr[24][17] = 2;
  arr[25][17] = 2;
  arr[25][16] = 2;
  arr[24][16] = 2;
  arr[25][18] = 2;
  arr[26][18] = 2;
  arr[26][17] = 2;
  arr[26][16] = 2;
  arr[27][16] = 2;
  arr[27][17] = 2;
  arr[27][18] = 2;
  arr[22][3] = 2;
  arr[22][4] = 2;
  arr[22][2] = 2;
  arr[23][2] = 2;
  arr[24][2] = 2;
  arr[25][2] = 2;
  arr[25][3] = 2;
  arr[25][4] = 2;
  arr[24][4] = 2;
  arr[23][4] = 2;
  arr[23][3] = 2;
  arr[24][3] = 2;
  arr[22][6] = 2;
  arr[22][7] = 2;
  arr[23][7] = 2;
  arr[24][7] = 2;
  arr[25][7] = 2;
  arr[25][6] = 2;
  arr[24][6] = 2;
  arr[23][6] = 2;
  arr[19][3] = 2;
  arr[19][4] = 2;
  arr[20][4] = 2;
  arr[20][3] = 2;
  arr[20][2] = 2;
  arr[19][2] = 2;
  arr[18][2] = 2;
  arr[17][2] = 2;
  arr[16][2] = 2;
  arr[16][3] = 2;
  arr[16][4] = 2;
  arr[17][4] = 2;
  arr[18][4] = 2;
  arr[18][3] = 2;
  arr[17][3] = 2;
  arr[2][2] = 2;
  arr[2][3] = 2;
  arr[2][4] = 2;
  arr[3][4] = 2;
  arr[4][4] = 2;
  arr[5][4] = 2;
  arr[5][3] = 2;
  arr[5][2] = 2;
  arr[4][2] = 2;
  arr[3][2] = 2;
  arr[3][3] = 2;
  arr[4][3] = 2;
  arr[7][2] = 2;
  arr[7][3] = 2;
  arr[7][4] = 2;
  arr[8][3] = 2;
  arr[8][4] = 2;
  arr[9][4] = 2;
  arr[9][3] = 2;
  arr[10][3] = 2;
  arr[10][4] = 2;
  arr[11][4] = 2;
  arr[11][3] = 2;
  arr[10][2] = 2;
  arr[11][2] = 2;
  arr[9][2] = 2;
  arr[8][2] = 2;
  arr[13][1] = 2;
  arr[13][2] = 2;
  arr[13][3] = 2;
  arr[13][4] = 2;
  arr[14][4] = 2;
  arr[14][3] = 2;
  arr[14][2] = 2;
  arr[14][1] = 2;
  arr[5][6] = 2;
  arr[4][6] = 2;
  arr[3][6] = 2;
  arr[2][6] = 2;
  arr[2][7] = 2;
  arr[3][7] = 2;
  arr[4][7] = 2;
  arr[5][7] = 2;
  arr[2][21] = 2;
  arr[3][21] = 2;
  arr[4][21] = 2;
  arr[5][21] = 2;
  arr[5][22] = 2;
  arr[5][23] = 2;
  arr[5][24] = 2;
  arr[5][25] = 2;
  arr[4][25] = 2;
  arr[4][24] = 2;
  arr[4][23] = 2;
  arr[4][22] = 2;
  arr[3][22] = 2;
  arr[2][22] = 2;
  arr[7][6] = 2;
  arr[7][7] = 2;
  arr[7][8] = 2;
  arr[7][9] = 2;
  arr[7][10] = 2;
  arr[7][11] = 2;
  arr[7][12] = 2;
  arr[7][13] = 2;
  arr[8][13] = 2;
  arr[8][12] = 2;
  arr[8][11] = 2;
  arr[8][10] = 2;
  arr[8][9] = 2;
  arr[8][8] = 2;
  arr[8][7] = 2;
  arr[8][6] = 2;
  arr[9][9] = 2;
  arr[10][9] = 2;
  arr[11][9] = 2;
  arr[11][10] = 2;
  arr[10][10] = 2;
  arr[9][10] = 2;
  arr[10][6] = 2;
  arr[10][7] = 2;
  arr[11][7] = 2;
  arr[11][6] = 2;
  arr[12][6] = 2;
  arr[12][7] = 2;
  arr[13][7] = 2;
  arr[13][6] = 2;
  arr[14][6] = 2;
  arr[14][7] = 2;
  arr[15][6] = 2;
  arr[15][7] = 2;
  arr[16][6] = 2;
  arr[16][7] = 2;
  arr[17][6] = 2;
  arr[17][7] = 2;
  arr[13][8] = 2;
  arr[14][8] = 2;
  arr[13][9] = 2;
  arr[14][9] = 2;
  arr[13][10] = 2;
  arr[14][10] = 2;
  arr[16][9] = 2;
  arr[16][10] = 2;
  arr[17][10] = 2;
  arr[17][9] = 2;
  arr[18][9] = 2;
  arr[19][10] = 2;
  arr[19][9] = 2;
  arr[18][10] = 2;
  arr[19][8] = 2;
  arr[19][7] = 2;
  arr[19][6] = 2;
  arr[20][7] = 2;
  arr[20][6] = 2;
  arr[20][8] = 2;
  arr[20][9] = 2;
  arr[20][10] = 2;
  arr[20][11] = 2;
  arr[19][11] = 2;
  arr[19][12] = 2;
  arr[20][12] = 2;
  arr[20][13] = 2;
  arr[19][13] = 2;
  arr[15][12] = 2;
  arr[16][12] = 2;
  arr[17][12] = 2;
  arr[17][13] = 2;
  arr[17][14] = 2;
  arr[17][15] = 2;
  arr[17][16] = 2;
  arr[16][16] = 2;
  arr[15][16] = 2;
  arr[14][16] = 2;
  arr[13][16] = 2;
  arr[12][16] = 2;
  arr[11][16] = 2;
  arr[10][16] = 2;
  arr[10][15] = 2;
  arr[10][14] = 2;
  arr[10][13] = 2;
  arr[10][12] = 2;
  arr[11][12] = 2;
  arr[12][12] = 2;
  arr[7][15] = 2;
  arr[8][15] = 2;
  arr[8][16] = 2;
  arr[7][16] = 2;
  arr[7][17] = 2;
  arr[8][17] = 2;
  arr[8][18] = 2;
  arr[7][18] = 2;
  arr[7][19] = 2;
  arr[8][19] = 2;
  arr[19][15] = 2;
  arr[20][15] = 2;
  arr[20][16] = 2;
  arr[19][16] = 2;
  arr[19][17] = 2;
  arr[20][17] = 2;
  arr[20][18] = 2;
  arr[19][18] = 2;
  arr[19][19] = 2;
  arr[20][19] = 2;
  arr[10][18] = 2;
  arr[11][18] = 2;
  arr[10][19] = 2;
  arr[11][19] = 2;
  arr[12][18] = 2;
  arr[12][19] = 2;
  arr[13][19] = 2;
  arr[13][18] = 2;
  arr[14][18] = 2;
  arr[14][19] = 2;
  arr[15][18] = 2;
  arr[15][19] = 2;
  arr[16][19] = 2;
  arr[16][18] = 2;
  arr[17][18] = 2;
  arr[17][19] = 2;
  arr[14][20] = 2;
  arr[13][20] = 2;
  arr[13][21] = 2;
  arr[14][21] = 2;
  arr[14][22] = 2;
  arr[13][22] = 2;
  arr[7][21] = 2;
  arr[8][21] = 2;
  arr[9][21] = 2;
  arr[10][21] = 2;
  arr[11][21] = 2;
  arr[11][22] = 2;
  arr[10][22] = 2;
  arr[9][22] = 2;
  arr[8][22] = 2;
  arr[7][22] = 2;
  arr[16][21] = 2;
  arr[17][21] = 2;
  arr[18][21] = 2;
  arr[19][21] = 2;
  arr[20][21] = 2;
  arr[20][22] = 2;
  arr[19][22] = 2;
  arr[18][22] = 2;
  arr[17][22] = 2;
  arr[16][22] = 2;
  arr[22][21] = 2;
  arr[23][21] = 2;
  arr[24][21] = 2;
  arr[25][21] = 2;
  arr[25][22] = 2;
  arr[24][22] = 2;
  arr[23][22] = 2;
  arr[22][22] = 2;
  arr[22][23] = 2;
  arr[23][23] = 2;
  arr[23][24] = 2;
  arr[22][24] = 2;
  arr[22][25] = 2;
  arr[23][25] = 2;
  arr[10][24] = 2;
  arr[10][25] = 2;
  arr[11][24] = 2;
  arr[11][25] = 2;
  arr[12][25] = 2;
  arr[12][24] = 2;
  arr[13][24] = 2;
  arr[13][25] = 2;
  arr[13][26] = 2;
  arr[13][27] = 2;
  arr[13][28] = 2;
  arr[14][28] = 2;
  arr[14][27] = 2;
  arr[14][26] = 2;
  arr[14][25] = 2;
  arr[14][24] = 2;
  arr[15][24] = 2;
  arr[15][25] = 2;
  arr[16][25] = 2;
  arr[16][24] = 2;
  arr[17][24] = 2;
  arr[17][25] = 2;
  arr[7][24] = 2;
  arr[8][24] = 2;
  arr[8][25] = 2;
  arr[7][25] = 2;
  arr[7][26] = 2;
  arr[8][26] = 2;
  arr[8][27] = 2;
  arr[7][27] = 2;
  arr[7][28] = 2;
  arr[8][28] = 2;
  arr[9][28] = 2;
  arr[9][27] = 2;
  arr[10][27] = 2;
  arr[10][28] = 2;
  arr[11][28] = 2;
  arr[11][27] = 2;
  arr[6][28] = 2;
  arr[6][27] = 2;
  arr[5][27] = 2;
  arr[5][28] = 2;
  arr[4][28] = 2;
  arr[4][27] = 2;
  arr[3][27] = 2;
  arr[3][28] = 2;
  arr[2][28] = 2;
  arr[2][27] = 2;
  arr[19][24] = 2;
  arr[20][24] = 2;
  arr[20][25] = 2;
  arr[19][25] = 2;
  arr[19][26] = 2;
  arr[20][26] = 2;
  arr[20][27] = 2;
  arr[19][27] = 2;
  arr[19][28] = 2;
  arr[20][28] = 2;
  arr[18][28] = 2;
  arr[18][27] = 2;
  arr[17][27] = 2;
  arr[16][27] = 2;
  arr[16][28] = 2;
  arr[17][28] = 2;
  arr[21][28] = 2;
  arr[21][27] = 2;
  arr[22][27] = 2;
  arr[22][28] = 2;
  arr[23][28] = 2;
  arr[23][27] = 2;
  arr[24][27] = 2;
  arr[24][28] = 2;
  arr[25][28] = 2;
  arr[25][27] = 2;
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

var ghosts = [];

ghosts.push({ x: 14, y: 14 });

//this will happen every frame
function drawFrame() {
  let background = fillRect(
    0,
    0,
    cellSize * matrixSizeX,
    cellSize * matrixSizeY - 1
  );
  background.className = "background";
  background.style.backgroundPosition = "50%";
  if (pacman.dir === 0 && arr[pacman.x][pacman.y - 1] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    if (arr[pacman.x][pacman.y - 1] === 4) {
      score++;
    }
    pacman.y = pacman.y - 1;
  }
  if (pacman.dir === 1 && arr[pacman.x][pacman.y + 1] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    if (arr[pacman.x][pacman.y + 1] === 4) {
      score++;
    }
    pacman.y = pacman.y + 1;
  }
  if (pacman.dir === 2 && arr[pacman.x - 1][pacman.y] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    if (arr[pacman.x - 1][pacman.y] === 4) {
      score++;
    }
    pacman.x = pacman.x - 1;
  }
  if (pacman.dir === 3 && arr[pacman.x + 1][pacman.y] !== 2) {
    arr[pacman.x][pacman.y] = 0;
    if (arr[pacman.x + 1][pacman.y] === 4) {
      score++;
    }
    pacman.x = pacman.x + 1;
  }
  arr[pacman.x][pacman.y] = 1;
  ghosts.forEach((ghost) => {
    let prev = {x:ghost.x, y:ghost.y}
    let tempArr = [];
    for (let x = 0; x < arr.length; x++) {
      tempArr.push([]);
      for (let y = 0; y < arr[x].length; y++) {
        tempArr[x].push({ type: arr[x][y], parent: null });
      }
    }
    if (tempArr[ghost.x + 1][ghost.y].type !== 2) {
      tempArr[ghost.x + 1][ghost.y].parent = { x: ghost.x + 1, y: ghost.y };
    }
    if (tempArr[ghost.x - 1][ghost.y].type !== 2) {
      tempArr[ghost.x - 1][ghost.y].parent = { x: ghost.x - 1, y: ghost.y };
    }
    if (tempArr[ghost.x][ghost.y + 1].type !== 2) {
      tempArr[ghost.x][ghost.y + 1].parent = { x: ghost.x, y: ghost.y + 1 };
    }
    if (tempArr[ghost.x][ghost.y - 1].type !== 2) {
      tempArr[ghost.x][ghost.y - 1].parent = { x: ghost.x, y: ghost.y - 1 };
    }
    for (let i = 0; i < 80; i++) {
      for (let x = 0; x < tempArr.length; x++) {
        for (let y = 0; y < tempArr[x].length; y++) {
          if (tempArr[x][y].parent !== null) {
            if (
              tempArr[x + 1][y].parent === null &&
              tempArr[x + 1][y].type !== 2
            ) {
              tempArr[x + 1][y].parent = tempArr[x][y].parent;
            }
            if (
              tempArr[x - 1][y].parent === null &&
              tempArr[x - 1][y].type !== 2
            ) {
              tempArr[x - 1][y].parent = tempArr[x][y].parent;
            }
            if (
              tempArr[x][y + 1].parent === null &&
              tempArr[x][y + 1].type !== 2
            ) {
              tempArr[x][y + 1].parent = tempArr[x][y].parent;
            }
            if (
              tempArr[x][y - 1].parent === null &&
              tempArr[x][y - 1].type !== 2
            ) {
              tempArr[x][y - 1].parent = tempArr[x][y].parent;
            }
          }
        }
      }
    }
    if (
      tempArr[pacman.x][pacman.y].parent.x === pacman.x &&
      tempArr[pacman.x][pacman.y].parent.y === pacman.y
    ){
        console.log("ha ha loser")
        gameEnd = "HA  HA  LOSER"
        localStorage.setItem('topPacmanResult', topResult);
    }
      ghost.x = tempArr[pacman.x][pacman.y].parent.x;
    ghost.y = tempArr[pacman.x][pacman.y].parent.y;

    //arr[ghost.x][ghost.y] = 3;
    color = "red";
    let ghostDiv = fillRect(ghost.x * cellSize, ghost.y * cellSize, cellSize, cellSize);
    ghostDiv.style.zIndex = 12424
    ghostDiv.style.left = `${getX(ghostDiv) - cellSize * 0.4}px`;
    ghostDiv.style.top = `${getY(ghostDiv) - cellSize * 0.4}px`;
    ghostDiv.style.width = `${cellSize * 1.8}px`;
    ghostDiv.style.height = `${cellSize * 1.8}px`;
    ghostDiv.className = "entity";
    ghostDiv.style.backgroundSize = `${cellSize * 80}px`;
    let right = 0
    if(frame % 2 === 0){
        right+= 1.8
    }
    if(prev.x > ghost.x){
        right+= 1.9*2
    }
    if(prev.y > ghost.y){
        right+= 1.9*4
    }
    if(prev.y < ghost.y){
        right+= 1.9*6
    }
    ghostDiv.style.backgroundPosition = `right ${
        cellSize * (54.7 + 0.8 + right)
    }px bottom ${cellSize * (1.8 + 7.6)}px`;
  });
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] === 1) {
        let pman = fillRect(
          x * cellSize,
          y * cellSize,
          cellSize - 1,
          cellSize - 1
        );
        pman.className = "entity";
        pman.style.backgroundSize = `${cellSize * 80}px`;
        let drawDown = 0;
        if (pacman.dir === 2) {
          drawDown = 1.9;
        }
        if (pacman.dir === 0) {
          drawDown = 1.9 + 1.9;
        }
        if (pacman.dir === 1) {
          drawDown = 1.9 + 1.9 + 1.9;
        }
        if (frame % 2 === 0) {
          pman.style.backgroundPosition = `right ${
            cellSize * (54.5 + 0.8)
          }px bottom ${cellSize * (1.8 + drawDown)}px`;
        } else {
          pman.style.backgroundPosition = `right ${
            cellSize * (54.5 + 0.8 + 1.9)
          }px bottom ${cellSize * (1.8 + drawDown)}px`;
        }
        pman.style.left = `${getX(pman) - cellSize * 0.4}px`;
        pman.style.top = `${getY(pman) - cellSize * 0.4}px`;
        pman.style.width = `${cellSize * 1.8}px`;
        pman.style.height = `${cellSize * 1.8}px`;
        pman.style.zIndex = 100;
      }
      if (arr[x][y] === 4) {
        let coin = fillRect(
          x * cellSize,
          y * cellSize,
          cellSize - 1,
          cellSize - 1
        );
        coin.className = "entity";
        coin.style.backgroundSize = `${cellSize * 80}px`;
        coin.style.backgroundPosition = `right ${cellSize * 1.85}px bottom ${
          cellSize * 1.85
        }px`;
      }
    }
  }
  if(score > topResult){
    topResult = score
    localStorage.setItem('topPacmanResult', topResult);
  }
  document.getElementById("score").innerHTML = `Top score: ${topResult}  🥇  |  Game score: ${score}  🏆`;
}