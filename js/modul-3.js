/*Задача 3-1
CRUD для свойств объекта
С - create (создать)
R - read (читать)
U - update (обновить)
D - delete (удалить)
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле 'mood' со значением 'happy'
добавляет поле 'full time' со значением true
заменяет значение 'hobby' на 'skydiving'
заменяет значение 'premium' на false
в переменную message записывает содержимое объекта user:
для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
с помощью оператора for...of
в формате ключ:значение
c переносом строки ('\n')
*/
/*

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
//Write code under this line  
 user.mood = 'happy';
 user["full time"] = true;
 user.hobby = 'skydiving';
 user.premium = false;
 
const keys = Object.keys(user);


// Write code under this line
for (const key of keys) {
    message += `${key}  :  ${user[key]}\n`
}
 
console.log(message); 
console.log(user);

'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' 
*/

/*
Задача 3-2
Подсчет количества свойств в объекте
Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

Циклы не должны использоваться
*/

/*const countProps = function(obj) {
    'use strict';
  // Write code under this line
  const keys = Object.keys(obj) 
  return keys.length;
  
};

console.log(countProps({})); // 0

console.log(countProps({a:1, b:1})); // 2

console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5

*/


/*
Задача 3-3
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".
*/

/*
const findBestEmployee = function (employees) {
  'use strict';
let best = 0;
  let key = '';
  const entries = Object.entries (employees);
  
  for (const entry of entries) {
       
      if (entry[1] > best) { 
      best = entry[1];
      key = entry[0];

  } 
};
return key;
 };  // Write code under this line};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
// 'lux'  

*/


/*
Задача 3-4
Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму зарплаты работников и возвращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/
/*
const countTotalSalary = function(employees) {
  'use strict';
  // Write code under this line
  let totalSalary = 0;
  const values = Object.values (employees);
  for (const value of values) {
   totalSalary += value;
   
}
return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
console.log(countTotalSalary(supports));
// 500
*/

/*
Задача 3-5
Оператор in и метод push
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

*/

function getAllPropValues (array, prop) {
  'use strict';
  let propertie;
  // Write code under this line 
  for (const product of products) {
    //propertie = products.prop;
    console.log (products.name);
  }
  //return propertie;
}

// Объекты и ожидаемый результат
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
]; 

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []
