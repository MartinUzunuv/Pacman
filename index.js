var arr = [];

const matrixSizeX = 20;
const matrixSizeY = 20;

var cellSize;

if(window.innerHeight > window.innerWidth){
    cellSize = window.innerWidth/matrixSizeX
}else{
    cellSize = window.innerHeight/matrixSizeY
}

for(let x = 0; x < matrixSizeX; x++){
    arr.push([])
    for(let y = 0; y < matrixSizeY; y++){
        arr[x].push(0)
    }
}

arr[1][1] = 1

function drawFrame() {
    for(let x = 0; x < arr.length; x++){
        for(let y = 0; y < arr[x].length; y++){
            if(arr[x][y] === 0){
                color = "black"
            } 
            if(arr[x][y] === 1){
                color = "yellow"
            } 
            fillRect(x*cellSize, y*cellSize, cellSize-1,cellSize-1)
        }
    }
}
