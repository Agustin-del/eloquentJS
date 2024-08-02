let arrays = [[1,2,3], [4,5], [6]];

let flatArray = arrays.reduce((a, arrays) => a.concat(arrays), [])


console.log(flatArray)