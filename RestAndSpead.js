function filterOutOdds(...nums){
    return nums.filter(nums => nums % 2 === 0);
}

const findMin = (...value) => Math.min(...value)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(value => value * 2)]

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0,index), ...items.slice(index + 1)];
} 

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const combineObj = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj;

}