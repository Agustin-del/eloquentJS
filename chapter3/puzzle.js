function findSolution(number) {
    function find(actual, history) {
        if(actual === number) {
            return history
        } else if( actual > number) {
            return null
        } else {
            return find(actual * 3, `(${history} * 3)`) ?? find(actual + 5, `(${history} + 5)`)
        }
    }
    return find(1, '1')
}

console.log(findSolution(24))