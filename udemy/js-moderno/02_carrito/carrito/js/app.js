// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Listeners
cargaEventListeners();

function cargaEventListeners() {
  // Dispara cuando se presiona "Agregar carrito"
  cursos.addEventListener('click', comprarCurso);

  // Cuando se elimina un curso del carrito
  carrito.addEventListener('click', eliminarCurso);

  // Al vaciar carrito
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

  // Al cargar el documento, mostrar LocalStorage
  document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


// Funciones

// Función que añade el curso al carrito
function comprarCurso(e) {
  e.preventDefault();

  // Delegation para agregar carrito
  if(e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement;

    // Enviamos el curso seleccionado para tomar sus datos
    leerDatosCursos(curso);
  }
}

//Lee los datos del curso
function leerDatosCursos(curso){
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id')
  }

  insertarCarrito(infoCurso);
  //console.log(infoCurso);
}

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img src="${ curso.imagen }" width=100>
    </td>
    <td>${ curso.titulo }</td>
    <td>${ curso.precio }</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${ curso.id }">X</a>
    </td>
  `;
  listaCursos.appendChild(row);
  guardarCursoLocalStorage(curso);
}

// Elimina curso del carrito en el DOM
function eliminarCurso(e) {
  e.preventDefault();

  let curso, cursoId;
  if (e.target.classList.contains('borrar-curso')) {
    e.target.parentElement.parentElement.remove();
    curso = e.target.parentElement.parentElement;
    cursoId = curso.querySelector('a').getAttribute('data-id');
  }
  eliminarCursoLocalStorage(cursoId);
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
  // forma lenta
  listaCursos.innerHTML = '';

  // forma rápida (recomendada)
  while (listaCursos.firstChild) {
    listaCursos.removeChild(listaCursos.firstChild);    
  }

  // Vaciar Local Storage
  vaciarLocalStorage();

  return false;
}

// Almacena cursos en el carrito a LocalStorage
function guardarCursoLocalStorage(curso) {
  let cursos;

  cursos = obtenerCursosLocalStorage();

  // El curso seleccionado se agrega al arreglo
  cursos.push(curso);

  localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
  let cursosLS;

  // Comprobamos si hay algo en LocalStorage
  if (localStorage.getItem('cursos') === null) {
    cursosLS = [];
  } else {
    cursosLS = JSON.parse(localStorage.getItem('cursos'));
  }
  return cursosLS;
}

// Imprime los cursos de Local Storage en el carrito
function leerLocalStorage() {
  let cursosLS;

  cursosLS = obtenerCursosLocalStorage();

  cursosLS.forEach(function(curso) {
    // construir el template
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src="${ curso.imagen }" width=100>
      </td>
      <td>${ curso.titulo }</td>
      <td>${ curso.precio }</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${ curso.id }">X</a>
      </td>
    `;
    listaCursos.appendChild(row);
  });
}

// Elimina curso por el ID del localStorage
function eliminarCursoLocalStorage(curso) {
  let cursosLS;

  // Obtenemos el arreglo de cursos
  cursosLS = obtenerCursosLocalStorage();

  // Iteramos comparando el ID del curso borrado con los del LS
  cursosLS.forEach(function(cursoLS, index) {
    if (cursoLS.id === curso.id) {
      cursosLS.splice(index, 1);
    }
  });

  // Añadimos el arreglo actual a Local Storage
  localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

// Elimina todos los cursos del Local Storage
function vaciarLocalStorage() {
  localStorage.clear();
}




