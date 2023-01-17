// Task 1

const arr = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (arr, index) => arr.splice(index, 1);

removeUser(arr, 1);
console.log(arr);


// Task 2

const obj = {name: 'Vasya', age: 1};

const getAllKeys = object => Object.keys(object);

console.log(getAllKeys(obj));
  

// Task 3

const getAllValues = object => Object.values(object);

console.log(getAllValues(obj)); 


// Task 4

{
const obj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

const insertIntoarr = (object, id) => arr.splice(arr.findIndex(o => o.id === id), 0, object);

insertIntoarr(obj, 2);
console.log(arr);

insertIntoarr(secondObj, 1);
console.log(arr); 
}


// Task 5

class Candidate {
    constructor(candidate) {
        Object.assign(this, candidate);
        this.state = this.state(candidate.address);
    }

    state(address) {
        return address.split(', ')[2];
    }
}

const candidate = new Candidate(candidateArr[0]);
console.log(candidate.state);


// Task 6

const getCompanyNames = () => {
    let companyArr = [];

    candidateArr.forEach(element => {
        companyArr.push(element['company']);   
    });


    return [...new Set(companyArr)];
}

console.log(getCompanyNames()); 


// Task 7

const getUsersByYear = year => {
    let idArr = [];

    candidateArr.forEach(element => {
        if (element.registered.split('-')[0] === year.toString()) {
            idArr.push(element['_id']);
        }   
    });

    return idArr;
}

console.log(getUsersByYear(2017)); 


// Task 8

const getCandidatesByUnreadMsg = quantity => {
    let candidateWithUnreadMsgArr = [];

    candidateArr.forEach(element => {
        if (element.greeting.split(' ')[5] === quantity.toString()) {
            candidateWithUnreadMsgArr.push(new Candidate(element));
        }   
    });

    return candidateWithUnreadMsgArr;
}

console.log(getCandidatesByUnreadMsg(8)); 


// Task 9

const getCandidatesByGender = (gender) => candidateArr.filter(element => element.gender === gender);

console.log(getCandidatesByGender('male')); 


// Task 10

// Функція reduce

{
let arr = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

function reduce(arr, reducer, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    
    for(let i = 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    
    return accumulator;
}

const sum = reduce(arr, sumReducer);
console.log(sum);

const sum2 = reduce(arr, sumReducer, 100);
console.log(sum2);
}

// Функція join
{
let arr = ['Vasya', 'Petya', 'Alexey'];

function join (arr, separator) {
    let result = '';
    if (separator === undefined) {
        separator = ',';
    } 

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result += arr[i];
            return result;
        }

        result += arr[i] + separator;
    }
}

const joinNames = join(arr);
console.log(joinNames);

const joinNames2 = join(arr, '-');
console.log(joinNames2);

const joinNames3 = join(arr, ', ');
console.log(joinNames3);
}