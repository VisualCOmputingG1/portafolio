let playing = false;
let fingers;
let button;

function setup() {
  // especificar múltiples formatos para distintos navegadores
  fingers = createVideo(['painterAlgorithmVideo.webm']);
  button = createButton('play');
  button.mousePressed(toggleVid); // adjuntar un listener al botón
}

// reproduce o pausa el video dependiendo de su estado actual
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}