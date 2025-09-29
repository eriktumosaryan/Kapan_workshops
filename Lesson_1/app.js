let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let exact_result = document.getElementById('exact_result_part')
let calculate = document.getElementById('calculate')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

let action = ''


calculate.onclick = function() {
    let n1 = Number(number1.value)
    let n2 = Number(number2.value)

    if(n1 === 0 || n2 === 0) {
        alert("Please Write numbers")
    } else{
        if(action === 'plus') {
            let a = Number(number1.value) + Number(number2.value)
            exact_result.textContent = a
            defineColor(a)
        } else if (action === 'minus') {
            let a = Number(number1.value) - Number(number2.value)
            exact_result.textContent = a
            defineColor(a)   
        }
    }

}

function defineColor(value) {
    if(value > 0) {
        exact_result.style.color = 'Green'  
    } else if (value < 0) {
        exact_result.style.color = 'Red'  
    } else {
        exact_result.style.color = 'Blue'  
    }
}

plus.onclick = function() {
    action = 'plus'
    console.log(action)
}



minus.onclick = function() {
    action = 'minus'
    console.log(action)

}