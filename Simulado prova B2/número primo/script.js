document.addEventListener("DOMContentLoaded", function() {
  // Obtém os elementos do HTML
  var numberInput = document.getElementById("number");
  var checkButton = document.getElementById("btn-check");
  var resultDiv = document.getElementById("result");
  
  // Adiciona um ouvinte de evento ao botão "Verificar"
  checkButton.addEventListener("click", function() {
    // Obtém o número digitado pelo usuário
    var number = Number(numberInput.value);
    
    // Verifica se o número é primo e exibe o resultado
    var isPrime = checkPrime(number);
    if (isPrime) {
      resultDiv.textContent = "O número " + number + " é primo.";
    } else {
      resultDiv.textContent = "O número " + number + " não é primo.";
    }
  });
  
  // Função para verificar se um número é primo
  function checkPrime(number) {
    // Verifica se o número é menor ou igual a 1
    if (number <= 1) {
      return false;
    }
    
    // Percorre os números de 2 até a raiz quadrada do número
    for (var i = 2; i <= Math.sqrt(number); i++) {
      // Se o número é divisível por qualquer número dentro desse intervalo, não é primo
      if (number % i === 0) {
        return false;
      }
    }
    
    // Se não encontrou nenhum divisor, o número é primo
    return true;
  }
});
