
let vidaJugadorA = 10;
let vidaJugadorB = 10;

let ataqueJugardorA = Math.floor(Math.random() * (6 - 1)) + 1;
let ataqueJugardorB = Math.floor(Math.random() * (5 - 2)) + 2;

let turno = 1;

let finDelJuego = false;

console.log("Comienza el juego");
while (finDelJuego === false) {
/* El juego esta corriendo */
    
  if (vidaJugadorA > 0 && vidaJugadorB > 0) {
    /* Ambos jugadores estan vivos */
        ataqueJugardorA = Math.floor(Math.random() * (6 - 1)) + 1;
        ataqueJugardorB = Math.floor(Math.random() * (5 - 2)) + 2;
      if (turno === 1) {
      /* Ataca jugador A */
        vidaJugadorB = vidaJugadorB - ataqueJugardorA;
        turno = 0;
        console.log("Jugador A hizo " + ataqueJugardorA + " puntos de daño");
    } else {
        /* Ataca jugador B */
        vidaJugadorA = vidaJugadorA - ataqueJugardorB;
        turno = 1;
        console.log("Jugador B hizo " + ataqueJugardorB + " puntos de daño");
    }
      
  } else {
    /* logica */
    if (vidaJugadorA < 0 && vidaJugadorB > 0) {
      /* Gana jugador B */
      console.log("Gana Jugador B");
    } else if (vidaJugadorB < 0 && vidaJugadorA > 0) {
      /* Gana jugador A */
      console.log("Gana Jugador A");
    } else {
      /* Empate */
      console.log("No gana ninguno");
    }

    finDelJuego = true;
  }
}
