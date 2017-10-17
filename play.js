console.log("Hello world!");

// console.log(new Buffer(100));
// console.log(new Buffer(100);

// console.log(Buffer.alloc(100));
console.log("--------------------LET-------------------------------");
console.log("");

var a = 2;
{
    let a = 3;
    console.log(a); // 3
}

console.log(a); // 2

console.log("------------------CONST-------------------------------");

// идентификатор переменной не может быть переприсвоен. 

{
    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR); // [5,6,7]
    // ARR = 10; // TypeError
    ARR[0] = 3; // значение можно менять
    console.log(ARR); // [3,6,7]
}

console.log("-----------Классическое функциональное выражение-----------------");
// Классическое функциональное выражение
let addition = function(a, b) {
    return a + b;
};
console.log(addition(2,2)); //
console.log("-----------Стрелочная функция-----------------");
// Стрелочная функция
let letAddition = (a, b) => a + b;

console.log(letAddition(2,2)); //

// Пример с использованием блока из фигурных скобок:

let arr = ['apple', 'banana', 'orange'];
let breakfast = arr.map(fruit => {
    return fruit + 's';
});
console.log(breakfast); // ['apples', 'bananas', 'oranges']

console.log("------------------Конструктор--------------------------");

function Person() {
    // Конструктор Person() определяет `this` как экземпляр самого себя.
    this.age = 0;

    setInterval(function growUp() {
            // Без использования `use strict`, функция growUp() определяет `this`
            // как глобальный объект, который отличается от `this`,
            // определённого конструктором Person().
            this.age++;
        }, 1000);
    }
    var p = new Person();
    console.log(p.age);

console.log("------------------------------------------------------");

// В ECMAScript это поведение стало возможным изменить, присвоив значение this другой переменной.

function Person5() {
    var self = this;
    self.age = 0;
    setInterval(function growUp() {         
    // Коллбэк относится к переменной `self`, значением которой является ожидаемый объект.
        self.age++;
    }, 1000);
}
var p5 = new Person5();
console.log(p5.age);

console.log("------------------------------------------------------");
// Внутри стрелочных функций значение this то же самое, что и снаружи, поэтому следующий код работает так, как от него и ожидается:

function Person6() {
    this.age = 0;
    setInterval(() => {
        this.age++; // `this` относится к объекту person
    }, 1000);
}
var p6 = new Person6();

console.log(p6.age);

console.log("---------------параметры по умолчанию-------------------");
// ES6 позволяет установить параметры по умолчанию при объявлении функции:

let getFinalPrice = (price, tax = 0.7) => price + price * tax;

console.log(getFinalPrice(500)); // 850, так как значение tax не задано

console.log(getFinalPrice(500, 0.2)); // 600, значение tax по-умолчанию заменяется на 0.2

console.log("------------... оператор называют spread---------------");
// ... оператор называют spread или rest, в зависимости от того, как и где он используется.

// При использовании в любом итерируемом объекте (iterable), данный оператор "разбивает" ("spread") его на индивидуальные элементы:

function fooc(x, y, z) {
    console.log(x, y, z);
}
let arra = [1, 2, 3];
console.log("spread");

fooc(...arra); // 1 2 3


console.log("------------... оператор называют rest------------------");
// Другим вариантом использования оператора ... является объединение набора значений в один массив. 

function foor(...args) {
    console.log(args);
}
console.log("rest");
foor(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

console.log("------------Короткая запись метода объекта------------------");

function getCar(make, model, value) {
    return {
        make,  // аналогично make: make
        model, // аналогично model: model
        value, // аналогично value: value
        // вычисляемые свойства теперь работают в литералах объекта
        ['make' + make]: true,
    // Короткая запись метода объекта пропускает ключевое слово `function` и 
    // двоеточие. Вместо "depreciate: function() {}" можно написать:
        depreciate() {
            this.value -= 2500;        }};
}

let car = getCar('Kia', 'Sorento', 40000);
console.log(car);

console.log("--------поддержка для восьмеричных и двоичных литералов-----------");
// В ES6 появилась новая поддержка для восьмеричных и двоичных литералов.
// Добавление к началу числа 0o или 0O преобразует его в восьмеричную систему счисления (аналогично, 0b или 0B преобразует в двоичную систему счисления). 

let oValue = 0o10;
console.log(oValue); // 8

let bValue = 0b10;
console.log(bValue); // 2

console.log("---------------Деструктуризация------------------");
// Деструктуризация помогает избежать использования вспомогательных переменных при взаимодействии с объектами и массивами.

function foo() {
    return [1, 2, 3];
}

let arr1 = foo(); // [1,2,3]
console.log(arr1);

let [aa, bb, cc] = foo();

console.log(aa, bb, cc); // 1 2 3

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

let { x: a1, y: b1, z: c1 } = bar();
console.log(a1, b1, c1); // 4 5 6

console.log("-----------------метод super-----------------------");
// ES6 позволяет использовать метод super в (безклассовых) объектах с прототипами. 
var parent = {
    foo() { console.log("Привет от Родителя!"); }
}
var child = {
    foo() {
        super.foo();
        console.log("Привет от Ребёнка!");
    }
}

Object.setPrototypeOf(child, parent);

child.foo(); // Привет от Родителя!
             // Привет от Ребёнка!

console.log("---------------интерполяция---------------------------");
// ES6 предоставляет более простой способ вставки значения переменной или результата выражения (т.н. "интерполяцию"), которые рассчитываются автоматически.

    // ${ ... } используется для вычисления значения переменной/выражения.
    // `` Обратные кавычки используются как разделитель для таких случаев.

let user = 'Кевин';
console.log(`Привет, ${user}!`); // Привет, Кевин!

console.log("--------------for...of-------------------------");
// for...of используется для перебора в цикле итерируемых объектов, например, массивов.

let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
    console.log(nickname);
}
console.log("------------------for...in------------------------");
// for...in используется для перебора в цикле всех доступных для перебора (enumerable) свойств объекта.

let nickNames = ['di', 'boo', 'punkeye'];
nickNames.size = 3;
for (let nickName in nickNames) {
    console.log(nickName);
}

console.log("------------------Map---------------------------");

// Классический объект состоит из ключей (всегда в строковом виде) и значений, тогда как в Map для ключа и значения можно использовать любое значение (и объекты, и примитивы).

var myMap = new Map();

var keyString = "строка",
    keyObj = {},
    keyFunc = function() {};


// устанавливаем значения
myMap.set(keyString, "значение, связанное со 'строка'");
myMap.set(keyObj, "значение, связанное с keyObj");
myMap.set(keyFunc, "значение, связанное с keyFunc");
myMap.size; // 3
// получаем значения
console.log(myMap.get(keyString));    // "значение, связанное со 'строка'"
console.log(myMap.get(keyObj));       // "значение, связанное с keyObj"
console.log(myMap.get(keyFunc));      // "значение, связанное с keyFunc"

console.log("---------------WeakMap-------------------");
// WeakMap это Map, в котором ключи обладают неустойчивыми связями, что позволяет не мешать сборщику мусора удалять элементы WeakMap. Это означает, что можно не беспокоиться об утечках памяти.
// В WeakMap, в отличие от Map, каждый ключ должен быть объектом.
// Для WeakMap есть только четыре метода: delete(ключ), has(ключ), get(ключ) и set(ключ, значение).

let w = new WeakMap();
// w.set('a', 'b');
// Uncaught TypeError: Invalid value used as weak map key

var o1 = {},    
    o2 = function(){},    
    o3 = {};

w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);

console.log(w.get(o3)); // undefined, потому что это заданное значение
console.log(w.has(o1)); // true
w.delete(o1);
console.log(w.has(o1)); // false

console.log("--------------Объекты Set-------------------");
// Объекты Set это коллекции уникальных значений. Дублированные значения игнорируются, т.к. коллекция должна содержать только уникальные значения. Значения могут быть примитивами или ссылками на объекты.

let mySet = new Set([1, 1, 2, 2, 3, 3]);

console.log(mySet.size); // 3
console.log(mySet.has(1)); // true
mySet.add('строки');
mySet.add({ a: 1, b:2 });


// Вы можете перебирать Set в цикле с помощью forEach или for...of. Перебор происходит в том же порядке, что и вставка.

mySet.forEach((item) => {
    console.log(item);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
});

console.log("------------------------------------------------------");
for (let value of mySet) {
    console.log(value);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
}
console.log("--------------Объект WeakSet----------------------");

// Объект WeakSet позволяет хранить объекты с неустойчивыми связями в коллекции. Объект в WeakSet уникален.
var ws = new WeakSet();
var obj = {},
    bar = {},  
    foo = {};

ws.add(bar);
ws.add(obj);
console.log(ws.has(bar)); // true
console.log(ws.has(foo));    // false, foo не был добавлен к коллекции
ws.delete(bar); // удаляет window из коллекции
console.log(ws.has(bar));    // false, window был удалён

console.log("-------------------Класс ES6-------------------");
// В ES6 представили новый синтаксис для классов. Класс ES6 не представляет собой новую объектно-ориентированную модель наследования. Это просто синтаксический сахар для существующего в JavaScript прототипного наследования.
// Функции, записанные с помощью ключевого слова static, используются для объявления статических свойств класса.

class Task {
    constructor() {
        console.log("Создан экземпляр task!");
    }

showId() {
       console.log(23);     
   }

static loadAll() {
        console.log("Загружаем все tasks...");
    }
}

console.log(typeof Task); // function

let task = new Task(); // "Создан экземпляр task!"

task.showId(); // 23

Task.loadAll(); // "Загружаем все tasks..."

console.log("----------------constructor-------------------");

class Car {
    constructor() {
        console.log("Создаём новый автомобиль");
    }
}
// В ES6 ключевое слово extends позволяет классу-потомку наследовать от родительского класса. Конструктор класса-потомка должен вызывать super().

class Porsche extends Car {
    constructor() {
        super();
        console.log("Создаём Porsche");
    }
}
let por = new Porsche(); // Создаём новый автомобиль
// Также, в классе-потомке можно вызвать метод родительского класса с помощью super.имяМетодаРодителя().


console.log("-----------------Symbol----------------------");

// Symbol это уникальный и неизменяемый тип данных, представленный в ES6. 
// Целью Symbol является создание уникального идентификатора, к которому нельзя получить доступ.
// Создать Symbol:

var sym = Symbol("опциональное описание");
console.log(typeof sym); // symbol
// Использовать new вместе с Symbol(…) нельзя.

// Если Symbol используется как свойство/ключ объекта, он сохраняется таким специальным образом, что свойство не будет показано при нормальном перечислении свойств объекта.
var o = {
    val: 10,
    [Symbol("случайный")]: "Я - символ",
};

console.log(Object.getOwnPropertyNames(o)); // val
// Чтобы извлечь символьные свойства объекта, нужно использовать Object.getOwnPropertySymbols(o)
console.log("----------------process.exit---------------------");

process.exit(-1);