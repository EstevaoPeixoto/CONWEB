document.addEventListener("DOMContentLoaded", function() {
    // Obtém os elementos do HTML
    var stringInput = document.getElementById("string");
    var checkButton = document.getElementById("btn-check");
    var resultDiv = document.getElementById("result");
    
    // Adiciona um ouvinte de evento ao botão "Verificar"
    checkButton.addEventListener("click", function() {
      // Obtém a string digitada pelo usuário
      var string = stringInput.value;
      
      // Verifica se a string é um palíndromo e exibe o resultado
      var isPalindrome = checkPalindrome(string);
      if (isPalindrome) {
        resultDiv.textContent = "A string \"" + string + "\" é um palíndromo.";
      } else {
        resultDiv.textContent = "A string \"" + string + "\" não é um palíndromo.";
      }
    });
    
    // Função para verificar se uma string é um palíndromo
    function checkPalindrome(string) {
      // Remove espaços e pontuações da string e converte para letras minúsculas
      var cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
      
      // Inverte a string
      var reversedString = cleanString.split("").reverse().join("");
      
      // Verifica se a string original é igual à string invertida
      return cleanString === reversedString;
    }
  });