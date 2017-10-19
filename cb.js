// определяем функцию с аргументом callback

function some_function(arg1, arg2, callback) {
    // переменная, генерирующая случайное число в интервале между arg1 и arg2
    let my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    // вызываем callback, куда передаём результат
    callback(my_number);
}

// вызываем функцию
some_function(5, 15, function (num) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log("callback called! " + num);
});