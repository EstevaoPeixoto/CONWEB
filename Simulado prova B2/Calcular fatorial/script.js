// Espera o DOM ser carregado
document.addEventListener("DOMContentLoaded", function() {
    // Obtém os elementos do HTML
    var numberInput = document.getElementById("number");
    var calculateButton = document.getElementById("btn-calculate");
    var resultDiv = document.getElementById("result");
    
    // Adiciona um ouvinte de evento ao botão "Calcular"
    calculateButton.addEventListener("click", function() {
      // Obtém o número digitado pelo usuário
      var number = Number(numberInput.value);
      
      // Calcula o fatorial e exibe o resultado
      var factorial = calculateFactorial(number);
      resultDiv.textContent = "O fatorial de " + number + " é: " + factorial;
    });
    
    // Função para calcular o fatorial de um número
    function calculateFactorial(number) {
      // Verifica se o número é igual a 0 ou 1
      if (number === 0 || number === 1) {
        return 1;
      }
      
      // Inicializa o fatorial com o valor do número
      var factorial = number;
      
      // Percorre os números de (number-1) até 1, multiplicando pelo fatorial atual
      for (var i = number - 1; i >= 1; i--) {
        factorial *= i;
      }
      
      return factorial;
    }
  });