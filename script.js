document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('mensajeConfirmacion').textContent = '¡Gracias por tu mensaje! Te responderé pronto.';
  this.reset();
});
