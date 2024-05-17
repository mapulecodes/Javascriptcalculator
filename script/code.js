let screen = document.getElementById('result');
// console.log(screen.value = 'hello')

function appendforcalculation(value) {
    screen.value += value
}

// function calculate {

//     textfield.value =- '-' + eval(textfield.value);
// }
function evaluate(){
    let result = eval(screen.value)
    screen.value = result
}

document.querySelector('[equals]').addEventListener('click', evaluate)