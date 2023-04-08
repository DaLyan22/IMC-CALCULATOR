const form = document.getElementById(

 'form')

form.addEventListener('submit',

 enviar);

function enviar(e) {

 e.preventDefault();

 const peso = document.getElementById(

  'peso')

 const altura = document

  .getElementById('altura')

 const imc = document.getElementById(

  'imc')

 imc.innerHTML = "Seu IMC é: " + (peso

  .value / altura.value / altura

  .value)

}

