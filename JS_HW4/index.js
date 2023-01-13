// Task 1

class Student {
    constructor(enrollee) {
        this.id = Student.ID++;
        Object.assign(this, enrollee);
        this.isSelfPayment = true;

        Student.listOfStudents.push(this);
        Student.defineIsSelfPayment();
    }

    static ID = 1;

    static listOfStudents = [];

    static defineIsSelfPayment() {
        const studentList = Student.listOfStudents;
        const studentsOnBudget = [];


        for (let enrollee of studentList) {
            if (enrollee.ratingPoint < 800) {
                enrollee.isSelfPayment = true;
            }

            else {
                studentsOnBudget.push(enrollee);

                function compare(a, b) {
                    if (a.ratingPoint > b.ratingPoint) {
                        return -1;
                    }
                    if (a.ratingPoint < b.ratingPoint) {
                        return 1
                    }
                    if (a.schoolRating > b.schoolRating) {
                        return -1;
                    }
                    if (a.schoolRating < b.schoolRating) {
                        return 1;
                    }
                    return 0;
                }

                studentsOnBudget.sort(compare);    
            }    
        }
        

        for (let index in studentsOnBudget) {
            if (index < 5) {
                studentsOnBudget[index].isSelfPayment = false;
            }
            else {
                studentsOnBudget[index].isSelfPayment = true;
            }
            
        }
        console.table(studentsOnBudget);
    }
}

for (const enrollee of studentArr) {
    new Student(enrollee)
}

console.table(Student.listOfStudents);

// Task 2

class CustomString {
    reverse(str) {
        let reverseString = "";
        
        for (let i = str.length - 1; i >= 0; i--) {
            reverseString += str[i];
        }

        return reverseString; // return str.split("").reverse().join("");
    }


    ucFirst(str) {
        let resultStr = "";

        for (let i = 0; i < str.length; i++) {
            if (i === 0) {
                resultStr += str[i].toUpperCase();
            }

            else {
                resultStr += str[i].toLowerCase();
            }
        }
        return resultStr; // return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }


    ucWords(sentence) {
        // const words = sentence.split(" ");
        
        // for (let i = 0; i < words.length; i++) {
        //    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        // }

        // return words.join(" ");
        let resultSentence = "";

        for (let i = 0; i < sentence.length; i++) {
            if (i === 0) {
                resultSentence += sentence[i].toUpperCase();
            }

            else if (sentence[i - 1] === (" ")) {
                resultSentence += sentence[i].toUpperCase();
            }
            

            else {
                resultSentence += sentence[i].toLowerCase();
            }
        }

        return resultSentence;
    }
}

const myString = new CustomString();

console.log(myString.reverse('qwerty')); 
console.log(myString.ucFirst('qweRty')); 
console.log(myString.ucWords('qweRty qwertY qwerty'));

// Task 3

class Validator {
    checkIsEmail(str) {
        const mailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        return mailFormat.test(str);
    }


    checkIsDomain(str) {
        const domainFormat = /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/;
        
        return domainFormat.test(str);

    }


    checkIsDate(str) {
        const dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        
        return dateFormat.test(str);
    }


    checkIsPhone(str) {
        const phoneFormat = /^[\+]?38[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

        return phoneFormat.test(str);
    }


}

var validator = new Validator();

console.log(validator.checkIsEmail('somchynskyi.roman@gmail.com')); 
console.log(validator.checkIsDomain('google.com')); 
console.log(validator.checkIsDate('30.11.2019')); 
console.log(validator.checkIsPhone('+38 (066) 937-99-92')); 

