const form = document.getElementById(
    'form')
   
   form.addEventListener('submit',
    enviar);
   
   
   
   function enviar(e) {
    e.preventDefault();
    const peso = document.getElementById(
     'peso')
    const altura = document.getElementById('altura')
   
    const imc = document.getElementById('imc')
   
    imc.innerHTML = "Seu IMC é: " + Math.round(peso
     .value / altura.value / altura
     .value * 10000)
   
   }
