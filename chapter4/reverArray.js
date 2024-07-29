function reverseArray(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i])
    }
    return newArray
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array
}

let myArray = [1 ,2, 3, 4]

console.log(reverseArrayInPlace(myArray))

