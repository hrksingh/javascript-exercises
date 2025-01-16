const currentYear = new Date().getFullYear();
const findTheOldest = function (persons) {
  persons.forEach((person) => {
    person.yearOfDeath ??= currentYear;
    person.age = person.yearOfDeath - person.yearOfBirth;
  });

  persons.sort((p1, p2) => p2.age - p1.age);
  return persons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
