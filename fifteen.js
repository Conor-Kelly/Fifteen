

let board = [[9,4,1,3],[0,10,6,14],[13,5,2,7],[11,8,12,15]];
var fifteen = [ 3 , 3 ];
let correctBoard = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];

function go() {
 view(createBoard(board));
 swapTiles();
}

  function createBoard(board) {
  let model = {
          position: board[0][0], //does nothing right now
          board: board,
          memory: [],
          solved: false
  };
  return model
}

function view(model) {
  var main = document.getElementById('main');
  main.className = "main";
  let p = document.createElement('p');
  for (let i = 0; i < 4; i++) {
    for (let n = 0; n < 4 ; n++) {
        let tile = makeTile(board[i][n]);
        main.appendChild(tile);
    }
  }
}

function makeTile(number) {
  let div = document.createElement('div');
  div.className = 'inner';
  div.innerHTML = number;
  let color = "7F7F7F";
  div.style.background = color;
  if (number == 15)
    div.style.background = "white";
  return div;
}

 function swapTiles() {
  var elements = document.getElementsByClassName('inner');
  for(let i=0;i< elements.length;i++) {
    elements[i].addEventListener('click', function() {
      swap(i);
    });
}
}

function swap(i) {
ipos = [ Math.floor(i/4), (i % 4) ]
if ((fifteen[1] == ipos[1] && Math.abs(fifteen[0] - ipos[0]) == 1)||
    (fifteen[0] == ipos[0] && Math.abs(fifteen[1] - ipos[1]) == 1)) {
    var temporary = board[ipos[0]][ipos[1]];
    board[ipos[0]][ipos[1]]=board[fifteen[0]][fifteen[1]];
   board[fifteen[0]][fifteen[1]] = temporary;
   fifteen = ipos;
   document.getElementById("main").innerHTML = "";
   if (isCorrect()) {
     alert("You won the game!");
   }
   go();
 }
}
function isCorrect() {
if (JSON.stringify(board) == JSON.stringify(correctBoard)) {
  return true;
}
}

function myFunction() {
document.getElementByClassName('inner').click();

}
