// const sum = function(a,b){
//     return console.log(a + b)
// }

// // sum(5,6)

// // ARROR FUNCTION

// const sum2 = (a,b)=> {
//     return console.log(a + b)
// }

// // sum2(5,6)

// const game =()=>'Sonic'

// console.log(game())

// ***********************TIMING EVENTS

function sub(channel){
    console.log(`Subscribe to ${channel}`)
}

// let timer = setTimeout(sub, 3000, 'Tau Chipurura')
let timer = setInterval(sub, 3000, 'Tau Chipurura')

const clear = ()=> {
    clearInterval(timer);
    console.log(`clearTimeout () stopped the time`)
}

const btn = document.getElementById('btn').addEventListener('click', clear);