document.addEventListener("DOMContentLoaded", function() {
    var stringInput = document.getElementById("string");
    var invertButton = document.getElementById("btn-invert");
    var resultDiv = document.getElementById("result");
    
    invertButton.addEventListener("click", function() {
      var string = stringInput.value;
      var invertedString = invertString(string);
      // Escreve na tela a string que foi invertida
      resultDiv.textContent = "String invertida: " + invertedString;
    });
    
    // Função para inverter a string, chamada pelo botão "Inverter"
    function invertString(string) {
      var inverted = "";
      
      for (var i = string.length - 1; i >= 0; i--) {
        inverted += string.charAt(i);
      }
      
      return inverted;
    }
  });