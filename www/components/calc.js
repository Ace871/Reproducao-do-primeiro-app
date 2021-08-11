
  window.onload = function(){
 const valor1 = document.querySelector("#valor1.1");
 
 const valor2 = document.querySelector("#valor2.1");
 
 const somar = document.querySelector("#somar");
 
 somar.addEventListener("click", function(){
 let resultado = parseFloat(valor1.value) + parseFloat(valor2.value);
 document.querySelector("#resposta1").value = resultado;
 });

}

  window.onload = function(){
const valor1a = document.querySelector("#valor1.2");
 
 const valor2a = document.querySelector("#valor2.2");
 
 const dividir = document.querySelector("#dividir");
 
 dividir.addEventListener("click", function(){
 let resultado2 = parseFloat(valor1a.value) / parseFloat(valor2a.value);
 document.querySelector("#resposta2").value = resultado2;
 });
 
}