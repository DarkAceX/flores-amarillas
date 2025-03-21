function mostrarFlor() {
  const flor = document.getElementById('flor');
  const mensajeBtn = document.getElementById('mensajeBtn');
  
  // Mostrar el girasol y el botón del mensaje
  flor.hidden = false;
  mensajeBtn.hidden = false;
}

function mostrarMensaje() {
  const mensaje = document.getElementById('mensaje');
  
  // Mostrar el mensaje final
  mensaje.hidden = false;
}
