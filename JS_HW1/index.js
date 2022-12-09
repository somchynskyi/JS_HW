// Task 1
console.log('Answer to task 1:')

for (let i = 1; i <= 10; i++ ) {
  
  if(i % 3 === 0)
    console.log('FizBuz');
  
  else if (i % 2 === 1)
    console.log('Buz');

  else
    console.log('Fiz');
}

// Task 2

let result = 1;

for (let i = 1; i <= 10; i++)
  result *= i;

console.log('Answer to task 2:', result);

// Task 3
// В умові зазначено що заборонено округляти, 
// тому я просто зрізав залишок (що не заборонено умовою) і додав один

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let consumptionPerAllWeeks = consumptionPerWeek * weeksAmount;
let quantityOfReamPaper = Math.trunc(consumptionPerAllWeeks / sheetsInReamPaper) + 1;
console.log('Answer to task 3:', quantityOfReamPaper);

// Task 4  

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;


console.log('Answer to task 4:');
const porch = Math.trunc(roomNumber / (roomsOnFloor * floors)) + 1;
console.log('Porch', porch);

const floor = Math.trunc((roomNumber / roomsOnFloor) % 9);
console.log('Floor', floor);

// Task 5

const medianNumber = 6;
let symbol1 = '#';
let symbol2 = '-';
console.log('Answer to task 5:');

for (let i = 1; i <= medianNumber; i++)
console.log(symbol2.repeat(medianNumber - i) + symbol1.repeat(2 * i - 1) + symbol2.repeat(medianNumber - i));