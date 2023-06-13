document.addEventListener("DOMContentLoaded", function() {
  // Obtém os elementos do HTML
  var stringInput = document.getElementById("string");
  var invertButton = document.getElementById("btn-invert");
  var resultDiv = document.getElementById("result");
  
  // Adiciona um ouvinte de evento ao botão "Inverter"
  invertButton.addEventListener("click", function() {
    // Obtém a string digitada pelo usuário
    var string = stringInput.value;
    
    // Chama a função para inverter a string
    var invertedString = invertString(string);
    
    // Exibe o resultado invertido
    resultDiv.textContent = "String invertida: " + invertedString;
  });
  
  // Função para inverter a string
  function invertString(string) {
    var inverted = "";
    
    // Percorre a string de trás para frente e concatena cada caractere
    for (var i = string.length - 1; i >= 0; i--) {
      inverted += string.charAt(i);
    }
    
    return inverted;
  }
});
