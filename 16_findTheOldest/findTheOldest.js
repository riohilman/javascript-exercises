const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        const currentAge = (currentPerson.yearOfDeath ?? currentYear) - currentPerson.yearOfBirth;
        const oldestAge = (oldestPerson.yearOfDeath ?? currentYear) - oldestPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldestPerson;
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
