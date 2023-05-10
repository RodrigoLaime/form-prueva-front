const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', enviarFormulario);

function enviarFormulario(evento) {
  evento.preventDefault();
  const datosFormulario = new FormData(formulario);

  fetch('http://localhost:5000/api/v1/files/upload', {
    method: 'POST',
    body: datosFormulario
  })
    .then(respuesta => {
      if (respuesta.ok) {
        alert('Formulario enviado con éxito');
        formulario.reset();
      } else {
        alert('Error al enviar el formulario'); 
      }
    })
    .catch(error => {
      console.error('Error al enviar el formulario', error);
    });
}