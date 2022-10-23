// Мутирование Копий

const person = {
  name: "Bob",
  age: 25,
};

const person2 = person;

person2.age = 26;
person2.isAdult = true;

console.log(person);
// {name: 'Bob', age: 26, isAdult: true}

/*Как избежать МУТАЦИИ
Вариант 1 (Object.assign) !Подойдет, если нет 
вложенных объекто "{}"
*/

const user = {
  name: "Bob",
  age: 25,
};

const user2 = Object.assign({}, user);
user2.age = 27;

console.log(user.age); // 25
console.log(user2.age); // 27

/*Как избежать МУТАЦИИ
Вариант 2 !Подойдет, если нет 
вложенных объекто "{}"
*/

const userId = {
  name: "Bob",
  age: 25,
};

const userId2 = { ...userId };
userId2.name = "Alice";

console.log(userId.name); // Bob
console.log(userId2.name); // Alice

/*Как избежать МУТАЦИИ
Вариант 3 
*/

const userId3 = {
  name: "Bob",
  age: 25,
};

const userId4 = JSON.parse(JSON.stringify(userId3));
userId4.name = "Alice";

console.log(userId3.name); // Bob
console.log(userId4.name); // Alice
