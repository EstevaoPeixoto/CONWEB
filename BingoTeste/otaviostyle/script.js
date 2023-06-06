var jogadores = []

function inserirJogador(){
    var nome = prompt('Digite o nome do jogador');
    var cartela = gerarCartelaJogador();

    var jogador = {
        nome: nome,
        cartela: cartela
    }

    jogadores.push(jogador);
    console.log(jogadores);
    desenharCartela(jogador);
}

function limparJogo(){

}

function gerarCartelaJogador(){
    var cartela = gerarColunaCartela(5, 1, 15), gerarColunaCartela(5, 16, 30), gerarColunaCartela(5, 31, )
    return{cartela};
}

function gerarColunaCartela(numeros, minimo, maximo){
    var coluna = [];

    while(coluna.length < numeros){
        var aleatorio = Math.floor(Math.random()*(max - min) + min)
        if(coluna)
    }
}


function desenharCartela(){
    var local_cartelas = document.getElementById('cartelas');

    var div_cartela = document.createElement('div');

    div_cartela.className = 'cartela';

    var h4_name = document.createElement('h4');

    h4_name.innerText = prompt('Digite o nome do jogador');

    div_cartela.appendChild(h4_name);

    local_cartelas.appendChild(div_cartela);

    var tabela = document.createElement('table');

    var thead = document.createElement('thead');

    var thB = document.createElement('th');
    thB.innerText = 'B'
    var thI = document.createElement('th');
    thI.innerText = 'I'
    var thN = document.createElement('th');
    thN.innerText = 'N'
    var thG = document.createElement('th');
    thG.innerText = 'G'
    var thO = document.createElement('th');
    thO.innerText = 'O'

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    tabela.appendChild(thead);

    var tbody = document.createElement('tbody')



    div_cartela.appendChild(tabela)
}