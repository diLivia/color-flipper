//array de caracteres hexadecimais
const hexadecimalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

//botão e elementos de cor
const buttonElement = document.getElementById('btn')
const colorTextElement = document.querySelector('.color')
const mainDivElement = document.getElementById('main-div')

//evento do botão
buttonElement.addEventListener('click', function () {
    let hexColor = '#'

    //gerar cor hexadecimal
    for (let i = 0; i < 6; i++) {
        hexColor += hexadecimalChars[randomNumber()]
    }

    //exibir código hexadecimal e alterar plano de fundo
    colorTextElement.textContent = hexColor
    mainDivElement.style.backgroundColor = hexColor
})

//gerar número aleatório
function randomNumber() {
    return Math.floor(Math.random() * hexadecimalChars.length)
}