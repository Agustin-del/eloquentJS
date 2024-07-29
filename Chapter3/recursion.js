/*ai: función recursiva para saber si son pares JS
*/
function esPar(n){
    if (n === 0) {
        return true
    }
    if (n === 1) {
        return false
    }
    if (n > 0) {
        return esPar(n - 2)
    } else {
        return esPar(n + 2)
    }
}

console.log(esPar(-3))