'use strict';
let age = document.getElementById('age');


function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
  // console.log("Пользователь " + surname + " " + name);
  // console.log(this.value);
  // console.log(age);
}
// console.log()
// showUser('алекс', 'lol');
console.log(showUser.apply(age, ['krav', 'alex']));

// let user = {
//   name: 'john'
// };

// function sayName(){
//   console.log(this);
//   console.log(this.name);
// }

// console.log(sayName.call(user));