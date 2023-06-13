document.addEventListener("DOMContentLoaded", function() {
    // Obtém os elementos do HTML
    var passwordInput = document.getElementById("password");
    var verifyButton = document.getElementById("btn-verify");
    var resultDiv = document.getElementById("result");
    
    // Adiciona um ouvinte de evento ao botão de verificação
    verifyButton.addEventListener("click", function() {
      // Obtém a senha digitada pelo usuário
      var password = passwordInput.value;
      
      // Valida a senha e exibe o resultado
      var isValid = validatePassword(password);
      if (isValid) {
        resultDiv.textContent = "A senha atende aos critérios.";
      } else {
        resultDiv.textContent = "A senha não atende aos critérios. Critérios: mínimo de 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número.";
      }
    });
    
    // Função para validar a senha
    function validatePassword(password) {
      // Verifica se a senha possui pelo menos 8 caracteres
      var hasMinimumLength = password.length >= 8;
      // Verifica se a senha contém pelo menos uma letra maiúscula
      var hasUppercase = /[A-Z]/.test(password);
      // Verifica se a senha contém pelo menos uma letra minúscula
      var hasLowercase = /[a-z]/.test(password);
      // Verifica se a senha contém pelo menos um número
      var hasNumber = /\d/.test(password);
      
      // Retorna true se todos os critérios forem atendidos
      return hasMinimumLength && hasUppercase && hasLowercase && hasNumber;
    }
  });