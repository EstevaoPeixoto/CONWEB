// Puxa os dados
document.addEventListener("DOMContentLoaded", function() {
    var numberInput = document.getElementById("number");
    var checkButton = document.getElementById("btn-check");
    var resultDiv = document.getElementById("result");
    
    checkButton.addEventListener("click", function() {
      var number = parseInt(numberInput.value);
      // Busca o número inserido
      if (isNaN(number)) {
        resultDiv.textContent = "Por favor, insira um número válido.";
      } 
      // Escreve na tela caso o número seja menor ou igual a 1
      else if (number <= 1) {
        resultDiv.textContent = "O número deve ser maior que 1.";
      } 
      // Escreve na tela caso o número seja primo
      else if (isPrime(number)) {
        resultDiv.textContent = number + " é um número primo.";
      } 
      // Escreve na tela caso o número não seja primo
      else {
        resultDiv.textContent = number + " não é um número primo.";
      }
    });
    
    // Função para verificar se um número é primo
    function isPrime(number) {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  });