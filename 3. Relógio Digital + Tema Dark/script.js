//FUNÇÃO PARA PEGAR A HORA
function mostrarHora(){
    const relogio = new Date()

    const h = String(relogio.getHours()).padStart(2, '0');
    const m = String(relogio.getMinutes()).padStart(2, '0');
    const s = String(relogio.getSeconds()).padStart(2, '0');

    const hora = document.getElementsByTagName('h1')
    hora[0].innerText = `${h}:${m}:${s}`

}

/*
setInterval(funcao, tempo)

funcao -> a funcao que sera executada
tempo -> intervalo de tempo que sera repetido em milissegundos
*/

setInterval(mostrarHora, 1000);


// ----------------------
// TEMA COM LOCALSTORAGE
// ----------------------

const body = document.body;
const btn = document.querySelector('#btn');

// 1) Carregar o tema salvo
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'dark'){
    body.classList.add('dark');
}

// 2) Função do botão com onclick
function clique(){
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        localStorage.setItem('tema', 'dark');
    }else{
        localStorage.setItem('tema', 'light');
    }
}