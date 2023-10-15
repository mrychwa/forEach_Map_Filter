// 1
function doubleValues(nums){
    const outputArr = [];
    nums.forEach(function(num){
        outputArr.push(num * 2);
    });
    return outputArr;
}

// 2
function onlyEvenValues(nums){
    const outputArr = [];
    nums.forEach(function(num){
        if (num % 2 === 0){
            outputArr.push(num);
        }
    })
    return outputArr;
}

// 3
function showFirstAndLast(arr){
    const outputArr = [];
    arr.forEach(function(word){
        const firstChar = word[0]; //this would also be the same as doing word.charAt(
        const lastChar = word[word.length - 1];  
        outputArr.push(firstChar + lastChar);
    })
    return outputArr;
}

// 4
function addKeyAndValue(arr,key,value){
    arr.forEach(function(obj){
        obj[key] = value;
    });
    return arr;
}

//5
function vowelCount(str){
    const outputObject = {};
    const letters = str.toLowerCase().split("");
    letters.forEach(function(letter){
        if ("aeiou".includes(letter)){
            if (outputObject[letter]){
                outputObject[letter]++;
            } else {
                outputObject[letter] = 1;
            }
        }
    })
    return outputObject;
}

//6
function doubleValuesWithMap(arr) {
    return arr.map(function(values) {
        return values * 2;
    });
}

//7
function valTimesIndex(arr){
    return arr.map(function(value, index) {
        return value * index;
    });
}

//8
function extractKey(arr, key){
    return arr.map(function(value) {
        return value[key];
    });
}

//9
function extractFullName(arr){
    return arr.map(function(value) {
        return value.first + " " + value.last;
    });
}

//10
function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    });
}

//11
function find(arr, searchValue) {
    const results = arr.filter(function(item){
        if(searchValue === item){
            return item;
        }
    });
    return results[0];
}

//12
function findInObj(arr, key, searchValue) {
    return arr.filter(function(object) {
        return object[key] === searchValue;
      })[0];
}

//13
function removeVowels(str) {
    const letters = str.toLowerCase().split("");
    const consonants = letters.filter(function(letter){
       if (!"aeiou".includes(letter)){
        return letter;
       }
    });
    return consonants.join("");
}

//14
function doubleOddNumbers(arr) {
    const odds = arr.filter(function(num){
        if (num % 2 === 1){
            return num;
        }
    });
    const doubledOdds = odds.map(function(num){
        return num * 2
    })
    return doubledOdds;
}
