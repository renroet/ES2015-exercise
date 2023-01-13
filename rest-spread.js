const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => {
    return nums.reduce((min, nextNum) => min < nextNum ? min : nextNum
)};

const mergeObjects = (obj1, obj2) => {return {...obj1, ...obj2}};

const doubleAndReturnArgs = (arr, ...vals) => {
    const doubles = vals.map(val => val * 2)
   return [...arr, ...doubles]  
};

const removeRandom = (items) => {
    const itemsCopy = [ ...items ];
    const idx = Math.floor(Math.random() * (items.length));
    itemsCopy.splice(idx, 1);
    return itemsCopy;
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key];
    return newObj;
};

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key]: val});
