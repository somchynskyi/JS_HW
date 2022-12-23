// Task 1

const citiesAndCountries = {
	'Київ': 'Україна',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нідерланди',
	'Берлін': 'Німеччина',
	'Париж': 'Франція',
	'Ліссабон': 'Португалія',
	'Відень': 'Австрія',
};
const result = [];

for (let city in citiesAndCountries) {
	result[result.length] = city + ' - це ' + citiesAndCountries[city];
}

console.log(result);

// Task 2

const amount = 6;
const amountArray = [];

for (let i = 3; i <= amount; i += 3) {
	amountArray[amountArray.length] = [i - 2, i - 1, i];
}

console.log(amountArray);

// Task 3

const namesOfDays = {
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(){
    const lang = 'ua';
    const day = 3;
    let nameOfDay = '';
    
	for (let key in namesOfDays) {
		if (key === lang) {
			nameOfDay = namesOfDays[key][day - 1];
		}
	}
	
    return nameOfDay;
}

console.log(getNameOfDay());

// Task 4

const numbers = [71, 12, 32, 9];

function compareNumbers(a, b) {
    return a - b;
}

numbers.sort(compareNumbers);

let sum = numbers[0] + numbers[1];

console.log(sum);

// Task 5

const arr = [1, 1, 1, 0, 0, 1];
let decision = 0;

const reversed = arr.reverse();
let index = 1

for (let code of reversed) {
	if (code === 1) {
		decision += index;
	}
	index *= 2;
}

console.log(decision);



