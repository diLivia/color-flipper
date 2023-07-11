const colors = {
    reds: ['indianred', 'lightcoral', 'salmon', 'darksalmon', 'lightsalmon', 'crimson', 'red', 'firebrick', 'darkred'],
    pinks: ['pink', 'lightpink', 'hotpink', 'deeppink', 'mediumvioletred', 'palevioletred'],
    oranges: ['coral', 'tomato', 'orangered', 'darkorange', 'orange'],
    yellows: ['gold', 'yellow', 'lightyellow', 'lemonchiffon', 'lightgoldenrodyellow', 'papayawhip', 'moccasin', 'peachpuff', 'palegoldenrod', 'khaki', 'darkkhaki'],
    purples: ['lavender', 'thistle', 'plum', 'violet', 'orchid', 'fuchsia', 'magenta', 'mediumOrchid', 'mediumPurple', 'blueViolet', 'darkViolet', 'darkOrchid', 'darkMagenta', 'purple', 'rebeccaPurple', 'indigo', 'mediumSlateBlue', 'slateBlue', 'darkSlateBlue'],
    greens: ['greenYellow', 'chartreuse', 'lawnGreen', 'lime', 'limeGreen', 'paleGreen', 'lightGreen', 'mediumSpringGreen', 'springGreen', 'mediumSeaGreen', 'seaGreen', 'forestGreen', 'green', 'darkGreen', 'yellowGreen', 'oliveDrab', 'olive', 'darkOliveGreen', 'mediumAquamarine', 'darkSeaGreen', 'lightSeaGreen', 'darkCyan', 'teal'],
    "blues-cyans": ['aqua', 'cyan', 'lightCyan', 'paleTurquoise', 'aquamarine', 'turquoise', 'mediumTurquoise', 'darkTurquoise', 'cadetBlue', 'steelBlue', 'lightSteelBlue', 'powerBlue', 'lightBlue', 'skyBlue', 'lightSkyeBlue', 'deepSkyBlue', 'dodgerBlue', 'cornflowerBlue', 'royalBlue', 'blue', 'mediumBlue', 'darkBlue', 'navy', 'midnightBlue'],
    browns: ['cornsilk', 'blanchedAlmond', 'bisque', 'navajoWhite', 'wheat', 'burlyWood', 'tan', 'rosyBrown', 'sandyBrown', 'goldenRod', 'darkGoldenrod', 'peru', 'chocolate', 'saddleBrown', 'sienna', 'brown', 'maroon'],
    whites: ['white', 'snow', 'honeydew', 'mintCream', 'azure', 'aliceBlue', 'ghostWhite', 'whiteSmoke', 'seaShell', 'beige', 'oldLace', 'floralWhite', 'ivory', 'antiqueWhite', 'linen', 'lavenderBlush', 'mistyRose'],
    greys: ['gainsboro', 'lightGray', 'silver', 'darkGray', 'gray', 'dimGray', 'lightSlateGray', 'slateGray', 'darkSlateGray', 'black'],
}

const selectEl = document.getElementById('select-el')
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const mainDiv = document.getElementById('main-div')
selectEl.onchange = function (){
    selectedValue = selectEl.options[selectEl.selectedIndex].value
    return selectedValue
}
let selectedValue = selectEl.options[selectEl.selectedIndex].value
let arr = colors[selectedValue]

//erro na troca de grupos

btn.addEventListener('click', function(){
    let randomColor = arr[randomNumber()]
    color.textContent = randomColor
    mainDiv.style.backgroundColor = randomColor
})

function randomNumber(){
    return Math.floor(Math.random() * arr.length)
}

