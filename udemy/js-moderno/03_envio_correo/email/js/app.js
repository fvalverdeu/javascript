// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// event listener
eventListeners();

function eventListeners() {
  // inicio de la aplicación y deshabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp);

  // campos del formulario
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);

  // botón enviar en el submit
  // btnEnviar.addEventListener('click', enviarEmail);
  formularioEnviar.addEventListener('submit', enviarEmail);

  // bontón de reset
  resetBtn.addEventListener('click', resetFormulario);
}

// functions
function inicioApp() {
  // deshabilitar el envío
  btnEnviar.disabled = true;
}

function validarCampo() {
  //console.log('dentro del input');
  
  // se valida la longitud del texto y que no esté vacío
  validarLongitud(this);

  // validar sólo email
  if (this.type === 'email') {
    validarEmail(this);
  }

  let errores = document.querySelectorAll('.error');

  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

// resetear el formulario
function resetFormulario(e) {
  formularioEnviar.reset();
  e.preventDefault();
}

// cuando se envía el corre
function enviarEmail(e) {
  // spinner al presionar enviar
  const spinnerGift = document.querySelector('#spinner');
  spinnerGift.style.display = 'block';

  // gift que envía email.
  const enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';
  enviado.style.display = 'block';

  // Ocultar spinner y mostrar gift enviado
  setTimeout(function() {
    spinnerGift.style.display = 'none';
    document.querySelector('#loaders').appendChild( enviado );
    setTimeout(function() {
      enviado.remove();
      formularioEnviar.reset();
    }, 5000);
  }, 3000);
  // console.log('mail enviado');
  e.preventDefault();
}

// verifica la longitud del texto en los campos.
function validarLongitud(campo) {
  // console.log(campo)
  if ( campo.value.length > 0 ) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function validarEmail(campo) {
  const mensaje = campo.value;
  if (mensaje.indexOf('@') !== -1) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}