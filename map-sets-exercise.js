// [1,2,3,4]

// "ref"

// {[1,2,3]: true,
//  [1,2,3]: false}

const hasDuplicate = (arr) => {
    return !(arr.length === [ ...new Set(arr)].length)
};

const vowelCount = (str) => {
    const vowels = 'aeiou'
    const map = new Map();
    for(let i = 0; i< str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())) {
            if(map.has(str[i].toLowerCase())) {
                map.set(str[i].toLowerCase(), map.get(str[i].toLowerCase()) + 1)
                }
            else {
                map.set(str[i].toLowerCase(), 1) }
}}
return map;
}