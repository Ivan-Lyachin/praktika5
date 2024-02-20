
// Task 2
// Напишите функцию стрелочную функцию t8, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t8(arr) {
//     const arr2 = arr.filter(function (item) {
//         return item > 5;
//     });
//     return arr2;
// }
const t8 = arr => arr.filter(item => item > 5);


// const t8
document.querySelector(".b-8").addEventListener("click", function () {
  document.querySelector(".out-8").textContent = t8([3, 4, 5, 6, 7, 8]);
});


// Task 7
// Напишите стрелочную функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

const t13 = () => {
  return Math.floor(Math.random() * 20) + 100;
};

document.querySelector(".b-13").addEventListener("click", function () {
  document.querySelector(".out-13").textContent = t13(100, 120);
});


// Task 11
// Напишите стрелочную функцию t17, которая проверяет что в массиве находятся только числа. Если да - то возвращает true, если нет, false.

const t17 = arr => arr.every(item => typeof item === 'number');

document.querySelector(".b-17").addEventListener("click", function () {
  document.querySelector(".out-17").textContent = t17([4, 5, 6]);
});

