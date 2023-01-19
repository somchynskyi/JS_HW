// Task 1

const searchCandidatesByPhoneNumber = phone =>  {
    const normalizePhone = phoneNumber => phoneNumber.replace(/\D/g, '');

    return candidateArr.filter(element => normalizePhone(element.phone).includes(normalizePhone(phone)));
}

console.log(searchCandidatesByPhoneNumber('43')); 
console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82')); 
 

// Task 2

const getCandidateById = id => {
    const candidate = candidateArr.find(element => element._id === id);
    
    candidate.registered = new Date(candidate.registered).toLocaleDateString().replace(/\./g, '/');
   
    return candidate;
}

console.log(getCandidateById('5e216bc9a6059760578aefa4')); 


// Task 3

const sortCandidatesArr = sortBy => {
    switch (sortBy) {
        case 'asc':
            return [...candidateArr].sort((a, b) => 
                a.balance.slice(1).replace(/\D/g, '') - b.balance.slice(1).replace(/\D/g, '')
            )

        case 'desc':
            return [...candidateArr].sort((a, b) =>
                b.balance.slice(1).replace(/\D/g, '') - a.balance.slice(1).replace(/\D/g, '')
            )
        
        default:
            return candidateArr;    
    }  
}

console.log(sortCandidatesArr('asc')); 
console.log(sortCandidatesArr('desc')); 
console.log(sortCandidatesArr('')); 


// Task 4

const getEyeColorMap = () => {
    const eyeColorMap = new Map();
    
    for (let candidate of candidateArr) {
        const eyeColor = eyeColorMap.get(candidate.eyeColor) || [];
        
        eyeColorMap.set(candidate.eyeColor, [ ...eyeColor, candidate ]);
    }

    return eyeColorMap;
}
    
console.log(getEyeColorMap());
