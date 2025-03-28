const fechaObjetivo = new Date('March 1, 2025 00:00:00 GMT-0300'); // Ajusta la fecha y hora

function cuentaRegresivaInicial(segundosRestantes) {
  if (segundosRestantes > 0) {
    // Formatear como DD:HH:MM:SS (aunque solo usamos segundos aquí)
    document.getElementById('counter').innerHTML = 
      `00:00:00:${segundosRestantes.toString().padStart(2, '0')}`;
    
    setTimeout(() => {
      cuentaRegresivaInicial(segundosRestantes - 1);
    }, 1000);
  } else {
    // Cuando llega a 0, inicia el contador principal
    actualizarContador();
  }
}

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    document.getElementById('counter').innerHTML = 'Se terminooooo,ya me podes hablar';
    document.getElementById('counter').classList.add('fiesta');
    return;
  }

  // Cálculos precisos:
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Formato DD:HH:MM:SS con 2 dígitos:
  document.getElementById('counter').innerHTML = 
    `${dias.toString().padStart(2, '0')}:${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  setTimeout(actualizarContador, 1000);
}

// Iniciar la cuenta regresiva de 3 segundos (3, 2, 1)
cuentaRegresivaInicial(3);