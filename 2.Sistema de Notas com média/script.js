function clicarMedia(){

    //validando campos de notas
    //usei parseFloat para tranformar string em numero
    const nota1 = parseFloat(document.querySelector('#input1').value)
    const nota2 = parseFloat(document.querySelector('#input2').value)
    const nota3 = parseFloat(document.querySelector('#input3').value)

    //fazendo o calculo da media dos 3 campos
    let calcularMedia = (nota1 + nota2 + nota3) / 3

    //criando variavel da media (h1)
    let total = document.querySelector('#media')
    total.innerText = calcularMedia.toFixed(1) //to.Fixed(1) para mostrar apenas uma casa após a virgula.
}
