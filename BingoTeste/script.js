document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.getElementById("name-input");
    var addPlayerButton = document.getElementById("btn-add-player");
    var startGameButton = document.getElementById("btn-start-game");
    var generateNumberButton = document.getElementById("btn-generate-number");
    var boardsContainer = document.getElementById("boards-container");
    var numberDisplay = document.getElementById("number-display");
    var winnerDisplay = document.getElementById("winner-display");
    var players = [];
    var currentNumber = null;
    
    addPlayerButton.addEventListener("click", function() {
      var playerName = nameInput.value.trim();
      
      if (playerName !== "") {
        players.push({
          name: playerName,
          board: generateBoard()
        });
        
        var boardElement = createBoardElement(playerName, players.length - 1);
        boardsContainer.appendChild(boardElement);
        
        nameInput.value = "";
        
        if (players.length > 1) {
          startGameButton.disabled = false;
        }
      }
    });
    
    startGameButton.addEventListener("click", function() {
      startGameButton.disabled = true;
      generateNumberButton.disabled = false;
    });
    
    generateNumberButton.addEventListener("click", function() {
      if (currentNumber === null) {
        initializeGame();
      }
      
      currentNumber = getRandomNumber();
      numberDisplay.textContent = "Current Number: " + currentNumber;
      
      for (var i = 0; i < players.length; i++) {
        var player = players[i];
        var board = player.board;
        var found = markNumber(board, currentNumber);
        
        if (found) {
          var boardElements = boardsContainer.getElementsByClassName("board");
          boardElements[i].classList.add("winner");
          winnerDisplay.textContent = "Player " + player.name + " wins!";
          generateNumberButton.disabled = true;
          break;
        }
      }
    });
    
    function initializeGame() {
      generateNumberButton.disabled = true;
      winnerDisplay.textContent = "";
    }
    
    function generateBoard() {
      var board = [];
      
      for (var i = 1; i <= 25; i++) {
        board.push(i);
      }
      
      return shuffleArray(board);
    }
    
    function getRandomNumber() {
      return Math.floor(Math.random() * 75) + 1;
    }
    
    function createBoardElement(playerName, playerIndex) {
      var boardElement = document.createElement("div");
      boardElement.classList.add("board");
      
      for (var i = 0; i < 25; i++) {
        var square = document.createElement("div");
        square.classList.add("square");
        square.textContent = players[playerIndex].board[i];
        boardElement.appendChild(square);
      }
      
      var playerLabel = document.createElement("div");
      playerLabel.classList.add("player-label");
      playerLabel.textContent = "Player: " + playerName;
      boardElement.appendChild(playerLabel);
      
      return boardElement;
    }
    
    function markNumber(board, number) {
      for (var i = 0; i < board.length; i++) {
        if (board[i] === number) {
          board[i] = -1;
          var squares = boardsContainer.getElementsByClassName("square");
          squares[i].classList.add("marked");
          return true;
        }
      }
      
      return false;
    }
    
    function shuffleArray(array) {
      var currentIndex = array.length;
      var temporaryValue, randomIndex;
      
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      
      return array;
    }
  });