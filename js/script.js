var player = null;
var playerSelected = document.getElementById('player-selected');

changePlayer('X');

function chooseSquare(id) {
  var square = document.getElementById(id);
  square.innerHTML = player;
  square.style.color = '#000000'
}

function changePlayer(valor) {
  player = valor;
  playerSelected.innerHTML = player;

}