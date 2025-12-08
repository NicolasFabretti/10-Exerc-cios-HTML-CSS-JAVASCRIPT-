//criando arrey com as frases
const frases = [
    "A jornada mais longa começa com um único passo.",
    "A persistência é o caminho do êxito.",
    "A única pessoa que pode te parar é você mesmo.",
    "Acredite em si mesmo e você será imparável.",
    "Não basta crer no trabalho em equipe, é preciso acreditar na equipe de trabalho.",
    "Cada dia é uma nova oportunidade para brilhar."
    
]

const botao = document.querySelector('#btn')
const fraseatual = document.querySelector('#h1-frase')

let ultimoIndice = -1;

botao.addEventListener("click", function () {
    let random;

    do {
        random = Math.floor(Math.random() * frases.length)
    } while (random === ultimoIndice);

    ultimoIndice = random;

    fraseatual.innerText = frases[random];
})                                                                                              