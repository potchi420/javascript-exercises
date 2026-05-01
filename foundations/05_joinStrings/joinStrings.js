var firstName = "Carlos";
var lastName = "Stevenson";
var thisYear = 1965;
var birthYear = 1947;

var fullName = firstName + " " + lastName;
var age = thisYear - birthYear;

var greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";





// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
