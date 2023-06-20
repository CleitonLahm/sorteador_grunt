document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#form-sorteador').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let numeroMaximo = document.querySelector('#numero-maximo');
    numeroMaximo = parseInt(numeroMaximo.value); 

    let numeroAleatorio = Math.random() * numeroMaximo;
    numeroAleatorio = Math.floor(numeroAleatorio + 1);
    document.querySelector('#resultado-valor').innerText = numeroAleatorio;
    document.querySelector('#resultado').computedStyleMap.display = 'block'
  });
});
