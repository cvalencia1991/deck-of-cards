function actualizaContador() {
  var movimientosTexto;
  movimientos++;
  movimientosTexto = movimientos;

  if (movimientos > niveles[nivelActual].movimientosMax && !modoRelax) {
    gameOver();
    return;
  }

  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }
  document.querySelector("#mov").innerText = movimientosTexto;
}

function maxContador() {
  var movimientosMaxTexto = niveles[nivelActual].movimientosMax;
  if (movimientosMaxTexto < 10) {
    movimientosMaxTexto = "0" + movimientosMaxTexto;
  }
  document.querySelector("#mov-total").innerText = movimientosMaxTexto;
}
