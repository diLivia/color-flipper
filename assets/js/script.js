const hex = [1, 2, 3, 4, 5, 6, 7, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    document.main.style.backgroundColor = color
    color.textContent = color
})