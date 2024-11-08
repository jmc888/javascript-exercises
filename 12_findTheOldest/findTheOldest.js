const findTheOldest = function(people) {
    return people.reduce((obj, people) => {
        const prevAge = obj.yearOfDeath !== undefined? obj.yearOfDeath - obj.yearOfBirth: ((new Date()).getFullYear()) - obj.yearOfBirth;
        const newAge = people.yearOfDeath !== undefined? people.yearOfDeath - people.yearOfBirth: ((new Date()).getFullYear()) - people.yearOfBirth;

        return newAge > prevAge? people: obj;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
