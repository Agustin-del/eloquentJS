// function arrayList(array, i ) {
//     if (i === array.length - 1) {
//         return {
//             value: array[i],
//             rest:null
//         }
//     } 
//     return {
//         value : array[i],
//         rest : arrayList(array, i + 1 )
//     }
// }

function arrayToList(array){
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
            list =  {
                value:array[i],
                rest: list
            }
        }
    return list;
}

function listToArray (list){
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list){
    return {
        value: element,
        rest: list
    }
}

function nth(list, number) {
    
    for(let node = list; node; node = node.rest) {
        if (number === 0) {
            return node.value;
        }
        number--;
    }
    return undefined;
}

function findIndex (list, value) {
    let index = 0;
    for(let node = list; node; node = node.rest) {
        if (node.value === value) {
            return index;
        }
        index += 1;
    }
    return undefined;
}

let array = [1, 2, 3, 10, 9];

let list = arrayToList(array);

array = listToArray(list);

console.log(nth(list, 4))