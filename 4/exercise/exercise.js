class Person {
  //
  _firstName = "";
  _lastName = "";
  _age = 0;
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  //
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
