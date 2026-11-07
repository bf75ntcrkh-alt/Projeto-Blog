function enviar(){
  var nome= document.getElementById("nome").value;
  var email= document.getElementById("email").value;
  var mensagem= document.getElementById("mensagem").value;
   
  document.getElementById("resultado").innerhtml="Obrigado, " + nome + " sua mensagem foi enviada!😉"
  
}