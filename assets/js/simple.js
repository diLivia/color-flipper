//array de cores básicas css
const colors = {
    reds: ['indianRed', 'lightCoral', 'salmon', 'darkSalmon', 'lightSalmon', 'crimson', 'red', 'fireBrick', 'darkRed'],
    pinks: ['pink', 'lightPink', 'hotPink', 'deepPink', 'mediumVioletRed', 'paleVioletRed'],
    oranges: ['coral', 'tomato', 'orangeRed', 'darkOrange', 'orange'],
    yellows: ['gold', 'yellow', 'lightYellow', 'lemonChiffon', 'lightGoldenrodYellow', 'papayawhip', 'moccasin', 'peachPuff', 'paleGoldenrod', 'khaki', 'darkKhaki'],
    purples: ['lavender', 'thistle', 'plum', 'violet', 'orchid', 'fuchsia', 'magenta', 'mediumOrchid', 'mediumPurple', 'blueViolet', 'darkViolet', 'darkOrchid', 'darkMagenta', 'purple', 'rebeccaPurple', 'indigo', 'mediumSlateBlue', 'slateBlue', 'darkSlateBlue'],
    greens: ['greenYellow', 'chartreuse', 'lawnGreen', 'lime', 'limeGreen', 'paleGreen', 'lightGreen', 'mediumSpringGreen', 'springGreen', 'mediumSeaGreen', 'seaGreen', 'forestGreen', 'green', 'darkGreen', 'yellowGreen', 'oliveDrab', 'olive', 'darkOliveGreen', 'mediumAquamarine', 'darkSeaGreen', 'lightSeaGreen', 'darkCyan', 'teal'],
    "blues-cyans": ['aqua', 'cyan', 'lightCyan', 'paleTurquoise', 'aquamarine', 'turquoise', 'mediumTurquoise', 'darkTurquoise', 'cadetBlue', 'steelBlue', 'lightSteelBlue', 'powerBlue', 'lightBlue', 'skyBlue', 'lightSkyeBlue', 'deepSkyBlue', 'dodgerBlue', 'cornflowerBlue', 'royalBlue', 'blue', 'mediumBlue', 'darkBlue', 'navy', 'midnightBlue'],
    browns: ['cornsilk', 'blanchedAlmond', 'bisque', 'navajoWhite', 'wheat', 'burlyWood', 'tan', 'rosyBrown', 'sandyBrown', 'goldenRod', 'darkGoldenrod', 'peru', 'chocolate', 'saddleBrown', 'sienna', 'brown', 'maroon'],
    whites: ['white', 'snow', 'honeydew', 'mintCream', 'azure', 'aliceBlue', 'ghostWhite', 'whiteSmoke', 'seaShell', 'beige', 'oldLace', 'floralWhite', 'ivory', 'antiqueWhite', 'linen', 'lavenderBlush', 'mistyRose'],
    greys: ['gainsboro', 'lightGray', 'silver', 'darkGray', 'gray', 'dimGray', 'lightSlateGray', 'slateGray', 'darkSlateGray', 'black'],
}

//botão, select e elementos de exibição de cor
const selectElement = document.getElementById('select-el')
const buttonElement = document.getElementById('btn')
const colorTextElement = document.querySelector('.color')
const mainDivElement = document.getElementById('main-div')

//vaviaveis de alteração
let colorGroup = []
let optionValue = ""
let randomColor = ""
let allColors = []

//funções para pegar todas as cores
function getAllColors() {
    return Object.values(colors).reduce(function(acc, group) {
      return acc.concat(group);
    }, []);
}

function updateAllColors() {
    allColors = getAllColors()
}

//evento do option change
selectElement.addEventListener('change', function () {
    optionValue = this.value
    colorGroup = colors[optionValue]
    updateAllColors()
})

//evento do botão
buttonElement.addEventListener('click', function () {
    let randomIndex

    if (optionValue === "all") {
        randomIndex = randomNumber(allColors.length)
        randomColor = allColors[randomIndex]
    } else {
        randomIndex = randomNumber(colorGroup.length)
        randomColor = colorGroup[randomIndex]
    }

    colorTextElement.textContent = randomColor
    mainDivElement.style.backgroundColor = randomColor
})

//gerar número aleatório, com parametro para definir um numero maximo
function randomNumber(max) {
    return Math.floor(Math.random() * max)
}