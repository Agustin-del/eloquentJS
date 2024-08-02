// function every(array, predicate) {
//     for (element of array) {
//         if (!predicate(element)) {
//             return false;
//         }
//     }
//     return true;
// }

function every (array, predicate) {
    return !array.some(e => !predicate(e))
}
