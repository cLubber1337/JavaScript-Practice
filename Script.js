/*function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);
*/
/*
let year = 2013;

if (year == 2015) {
  console.log("Year is 2015");
} else if (year == 2014) {
  console.log("Year is 2014");
} else {
  console.log("Year is not 2015/2014");
}
*/

/* let accessAllowed;
let age = 19;
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);
*/
/*
let age = prompt("How old are you?");
let gender = prompt("what is your gender");
let massage;

if (age >= 18 && gender == "man") {
  massage = "Hello Gentlemen";
} else if (age >= 18 && gender == "woman") {
  massage = " Hello Lady";
} else {
  massage = "Hello kid";
  alert(massage);
}*/
/*
let hour = 12;
if (hour < 10 || hour > 18) {
  console.log("office is closed");
} else {
  console.log("office is open");
}
/*
let value = false;
let result = !value;
console.log(result);
*/
/*
?? - борьба с undefined  и null
let user;

console.log(`Hello, ${user ?? "Anonim"}`);
*/
/*
let i = 0;
while (i <= 3) {
  console.log(i);
  i++;
}
*/
/*
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
*/
/*
let i;
for (i = 0; i < 3; i++) {
  console.log(i);
}
*/
/*
let i = 0;
for (; i < 3; i++) {
  console.log(i);
}
*/

/*const personOne = {
  name: "Bob",
  age: 21,
};
function increasePersonAge(person) {
  person.age += 1;
  return person;
}
increasePersonAge(personOne);
console.log(personOne.age);
*/
/*
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i)
}
*/
/*мало
let a = 3 + 2;
switch (a) {
  case 3:
    console.log("Few");
    break;
  case 4:
    console.log("Enough");
    break;
  case 5:
    console.log("Overflow");
    break;
  default:
    console.log("No such values");
}
*/
/*
let a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    console.log("run successfully");
    break;
  default:
    console.log("not executed");
}
*/
/*
let a = 4;
switch (a) {
  case 4:
    console.log("Correct");
    break;
  case 3:
  case 5:
  case 6:
    console.log("Incorrect");
    break;
  default:
    console.log("Strange input");
}
*/
/*
let arg = prompt("Введите число?");
switch (arg) {
  case "0":
  case "1":
    alert("Один или ноль");
    break;

  case "2":
    alert("Два");
    break;

  case 3:
    alert("Никогда не выполнится!");
    break;
  default:
    alert("Неизвестное значение");
}
*/
/*
let userName = "Oleg";
function showMessage() {
  let message = "Hello, " + userName + "!";
  console.log(message);
}
showMessage();
*/
/*
let num = 3;
if (num > 10 || num < 5) {
  console.log("No");
} else {
  console.log("Yes");
}
*/
/*
function showMessage(from, text) {
  console.log(from + ": " + text);
}
showMessage("Oleg", "How are you?");
*/
/*
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < 1; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
}
showPrimes(10);
*/
/*
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % 1 == 0) return false;
  }
  return true;
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
  }
}
showPrimes(30);
*/