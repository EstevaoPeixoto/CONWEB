document.getElementById('rodar').onclick = rodarloop;
document.getElementById('while').onclick = whileloop;

function rodarloop(){
    for(let i = 0; i < 10; i = i + 1){
        console.log(i)
    }
}

function whileloop(){
    i = 0;
    while(i < 10){
        console.log(i);
        i = i + 1;
    }
}
