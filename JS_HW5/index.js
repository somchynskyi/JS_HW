// Task 1 

function makeCounter() {
    let count = 0;

    return function(number) {
        count += number;
        
        return count;
    }
}

let counter = makeCounter();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));


// Task 2

function updateArr() {
    let arr = [];

    return function(element) {
        if (element === undefined) {
           return arr = [];
        }

        arr.push(element);

        return arr; 
    }
}


let getUpdatedArr = updateArr();

console.log(getUpdatedArr(3)); 
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({name: 'Vasya'})); 
console.log(getUpdatedArr()); 
console.log(getUpdatedArr(4)); 


// Task 3

function timeDifference() {
    let lastTime = 0;

    return function() {
        if (lastTime === 0) {
            lastTime = new Date();

            return 'Enabled'
        }
        
        const nowTime = new Date();
        const differenceOfTime = Math.round((nowTime - lastTime) / 1000);
        
        lastTime = nowTime;

        return differenceOfTime;
    }
}

let getTime = timeDifference();


console.log(getTime());

setTimeout(() => console.log(getTime()), 2000);

setTimeout(() => console.log(getTime()), 10000);  


// Task 4  

const timeConverter = number => {
    const minutes = (Math.floor(number / 60)).toString().padStart(2, 0);
    const seconds = (number % 60).toString().padStart(2, 0);

    return `${minutes}:${seconds}`;
}

const timer = time => {
    const interval = setInterval(() => {
        if (time === 0) {
            clearInterval(interval);
            return console.log("Timer End");
        }

        console.log(timeConverter(time));
        time--;
    
    }, 1000);
}

//  timer(10);
//  timer(70);
//  timer(130);





