function range (start, end, step = (start < end  ? 1 : -1)) {
    let array = []
    if(step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i)
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i)
        }
    }
    return array
}

function sum(numbers) {
    let total = 0
    for(number of numbers) {
        total += number
    }
    return total
}

