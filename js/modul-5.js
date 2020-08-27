/*
Задача 5-1
function-constructor
Напиши функцию-конструктор Account, 
которая создает объект со свойствами login и email.

В prototype функции-конструктора добавь метод getInfo(), 
который возвращает строку со значениями свойств login и email объекта.
*/

// Write code under this line

//  const Account = function(login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function() {

//   return `login : ${this.login}, email: ${this.email}`;

// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'// 'function'// 'login : Mangozedog, email: mango@dog.woof'// 'login : Poly, email: poly@mail.com'

/*
Задача 5-2
class
Напиши класс User для создания пользователя со следующим свойствами:

name - строка
age - число
followers - число
Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
*/

// Write code under this line
// class User {
    
//   constructor (name, age, followers) {
    
//       this.name = name;
//       this.age = age;
//       this.followers = followers;
//   };
  
//   getInfo = function () {
//     return (`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//   };
  
// };

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo()); 
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo); 
// // 'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'


/*
Задача 5-3
использование методов класса
Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получает товар и, если он есть, удаляет его из текущих
*/

// Write code under this line

class Storage {
  
  static getItems(items) {
      console.log('Car.logInfo -> carObj', items);
  }

  constructor({} = {}) {
      this.brand = brand;
      this._model = model;
      this._price = price;
  }

  get price() {
      return this._price;
  }

  set price(newPrice) {
      this._price = newPrice;
  }

  get model() {
      return this._model;
  }

  set model(newModel) {
      this._model = newModel;
  }
}

  

console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

 const storage = new Storage(goods);

 console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

 storage.addItem('Дроид');
 console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

 storage.removeItem('Пролонгер');
 console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

