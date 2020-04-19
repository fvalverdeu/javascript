// cotizador constructor

function Seguro() {

}

const max = new Date().getFullYear(),
      min = max - 20;

      console.log(max)
      console.log(min)

const selectAnios = document.getElementById('anio');

for(let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}
